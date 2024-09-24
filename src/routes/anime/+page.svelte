<script lang="ts">
  import { useSWR } from "sswr";
  import AnimeCard from "../../components/cards/AnimeCard.svelte";
  import axios from "axios";

  // Fetcher function using Axios
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };


  // Use SWR to fetch anime data
  const { data, error } = useSWR(`https://api.simkl.com/anime/genres/all/all-types/all-countries/all-years/popular-today?client_id=${import.meta.env.VITE_SIMKL_ID}`, fetcher);

  // Log the data and errors to inspect
  $: console.log('Data>>>>>', $data);
  $: console.log('Fetch Error:', $error);
</script>

<div class="container mx-auto px-4 py-8">
  {#if $error}
    <p class="text-center text-red-500">Error loading data: {$error.message}</p>
  {:else if !$data}
    <p class="text-center">Loading...</p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each $data as anime}
        <AnimeCard {anime} />
      {/each}
    </div>
  {/if}
</div>