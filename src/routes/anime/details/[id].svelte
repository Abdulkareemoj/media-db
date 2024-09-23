<script lang="ts">
  import { onMount } from "svelte";
  import { useSWR } from "sswr";
  import axios from "axios";
  import { page } from "$app/stores";
  import type { Writable } from "svelte/store";

  let anime: any;
  let error: string | null = null;

  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  };

  // Get the anime ID from the URL
  $: animeId = ($page as Writable<{ params: { id: string } }>).params.id;

  // Use SWR to fetch anime details
  const { data, error: fetchError } = useSWR(`https://api.jikan.moe/v4/anime/${animeId}/full`, fetcher);

  onMount(() => {
    if (fetchError) {
      error = fetchError.message;
    } else {
      anime = data;
    }
  });
</script>

{#if error}
  <p>Error loading data: {error}</p>
{:else if !data}
  <p>Loading...</p>
{:else}
  <div>
    <h1>{data.title}</h1>
    <img src={data.images.jpg.image_url} alt={data.title} />
    <p>{data.synopsis}</p>
    <!-- Add more details as needed -->
  </div>
{/if}