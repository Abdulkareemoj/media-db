<script lang="ts">
  import { useSWR } from "sswr";
  import MovieCard from "../../components/cards/MovieCard.svelte";
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


  // Use SWR to fetch movie data
  const { data, error } = useSWR(`https://api.simkl.com/movies/trending/?extended=overview,theater,metadata,tmdb,genres&client_id=${import.meta.env.VITE_SIMKL_ID}`, fetcher);

</script>

<div class="container mx-auto px-4 py-8">
  {#if $error}
    <p class="text-center text-red-500">Error loading data: {$error.message}</p>
  {:else if !$data}
    <p class="text-center">Loading...</p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each $data as movie}
        <MovieCard {movie} />
      {/each}
    </div>
  {/if}
</div>