<script lang="ts">
	import { useSWR } from "sswr";
	import SeriesCard from "../../components/cards/SeriesCard.svelte";
	import axios from "axios";

	// Fetcher function using Axios
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

	// Use SWR to fetch series data
	const { data, error } = useSWR("https://api.tvmaze.com/schedule", fetcher);

	let serials: any;
	let fetchError: any;

	// Subscribe to the store
	$: serials = $data?.data; // Access the nested data property
	$: fetchError = $error;
</script>

<div class="container mx-auto px-4 py-8">
	{#if fetchError}
		<p class="text-center text-red-500">Error loading data: {fetchError.message}</p>
	{:else if !serials}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each serials as series}
				<SeriesCard {series} />
			{/each}
		</div>
	{/if}
</div>
