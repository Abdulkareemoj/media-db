<script lang="ts">
	import { useSWR } from "sswr";
	import MovieCard from "../../components/cards/MovieCard.svelte";
	import axios from "axios";

	// Fetcher function using Axios
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

	// Use SWR to fetch Manga data
	const { data, error } = useSWR("https://api.jikan.moe/v4/top/manga", fetcher);

	let movies: any;
	let fetchError: any;

	// Subscribe to the store
	$: movies = $data?.data; // Access the nested data property
	$: fetchError = $error;
	  // Log the data to inspect its structure
  $: console.log(movies);
</script>

<div class="container mx-auto px-4 py-8">
	{#if fetchError}
		<p class="text-center text-red-500">Error loading data: {fetchError.message}</p>
	{:else if !movies}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each movies as movie}
				<MovieCard {movie} />
			{/each}
		</div>
	{/if}
</div>
