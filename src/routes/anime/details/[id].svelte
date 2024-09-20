<script lang="ts">
  import { onMount } from "svelte";
  import { useSWR } from "sswr";
  import axios from "axios";
  import { page } from "$app/stores";
  import type { Writable } from "svelte/store";

  let anime: any;
  const fetcher = (url: string) => axios.get(url).then(res => res.data);

  // Get the anime ID from the URL
  $: animeId = ($page as unknown as Writable<{ params: { id: string } }>).params.id;

  // Use SWR to fetch anime details
  const { data, error } = useSWR(`https://api.jikan.moe/v4/anime/${animeId}/full`, fetcher);

  onMount(() => {
    anime = $data;
  });
</script>

{#if error}
  <p>Error loading data: {error.message}</p>
{:else if !data}
  <p>Loading...</p>
{:else}
  <div>
    <!-- Render your anime details here -->
    <p>{anime.title}</p>
  </div>
{/if}

{#if error}
  <p>Error loading data</p>
{:else if !anime}
  <p>Loading...</p>
{:else}
  <div>
    <h1>{anime.title}</h1>
    <img src={anime.images.jpg.image_url} alt={anime.title} />
    <p>{anime.synopsis}</p>
    <!-- Add more details as needed -->
  </div>
{/if}