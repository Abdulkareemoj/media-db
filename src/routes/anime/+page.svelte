<script lang="ts">
	import { useSWR } from "sswr";
	import AnimeCard from "../../components/cards/AnimeCard.svelte";
	import axios from "axios";

	// Fetcher function using Axios
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

	// Use SWR to fetch anime data
	const { data, error } = useSWR(`https://api.simkl.com/anime/trending/?extended=overview,metadata,tmdb,genres,trailer&client_id=${import.meta.env.VITE_SIMKL_KEY}`, fetcher);

	let animes: any;
	let fetchError: any;

	// Subscribe to the store
	$: animes = $data?.data; // Access the nested data property
	$: fetchError = $error;
	  // Log the data to inspect its structure
  $: console.log('ANIME>>>>>', animes);
</script>

<div class="container mx-auto px-4 py-8">
	{#if fetchError}
		<p class="text-center text-red-500">Error loading data: {fetchError.message}</p>
	{:else if !animes}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each animes as anime}
				<AnimeCard {anime} />
			{/each}
		</div>
	{/if}
</div>
