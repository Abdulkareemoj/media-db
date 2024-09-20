<script lang="ts">
  import { onMount } from "svelte";
  import { useSWR } from "sswr";
  import axios from "axios";
  import { page } from "$app/stores";
  import type { Writable } from "svelte/store";

  let manga: any;
  const fetcher = (url: string) => axios.get(url).then(res => res.data);

  // Get the anime ID from the URL
  $: animeId = ($page as unknown as Writable<{ params: { id: string } }>).params.id;

  // Use SWR to fetch anime details
  const { data, error } = useSWR(`https://api.jikan.moe/v4/manga/${mangaId}/full`, fetcher);

  onMount(() => {
    manga = $data;
  });
</script>

{#if error}
  <p>Error loading data: {error.message}</p>
{:else if !data}
  <p>Loading...</p>
{:else}
  <div>
    <!-- Render your manga details here -->
    <p>{manga.title}</p>
  </div>
{/if}

{#if error}
  <p>Error loading data</p>
{:else if !manga}
  <p>Loading...</p>
{:else}
  <div>
    <h1>{manga.title}</h1>
    <img src={manga.images.jpg.image_url} alt={manga.title} />
    <p>{manga.synopsis}</p>
    <!-- Add more details as needed -->
  </div>
{/if}