<script lang="ts">
	import { useSWR } from "sswr";
	import MangaCard from "../../components/cards/MangaCard.svelte";
	import axios from "axios";

	// Fetcher function using Axios
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

	// Use SWR to fetch Manga data
	const { data, error } = useSWR("https://api.jikan.moe/v4/top/manga", fetcher);

	let mangas: any;
	let fetchError: any;

	// Subscribe to the store
	$: mangas = $data?.data; // Access the nested data property
	$: fetchError = $error;
</script>

<div class="container mx-auto px-4 py-8">
	{#if fetchError}
		<p class="text-center text-red-500">Error loading data: {fetchError.message}</p>
	{:else if !mangas}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each mangas as manga}
				<MangaCard {manga} />
			{/each}
		</div>
	{/if}
</div>
