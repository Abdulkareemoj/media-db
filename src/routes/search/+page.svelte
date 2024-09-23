<script>
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { Search } from "svelte-lucide";
	import { Card, CardContent } from "$lib/components/ui/card";

	let searchQuery = "";
	let searchResults = [];

	function handleSearch() {
		// Placeholder function for search logic
		// In a real application, you would make an API call here
		searchResults = [
			{ title: "Result 1", description: "Description for Result 1" },
			{ title: "Result 2", description: "Description for Result 2" },
			{ title: "Result 3", description: "Description for Result 3" },
		];
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-8 text-center">Search</h1>

	<div class="max-w-2xl mx-auto mb-8">
		<form on:submit|preventDefault={handleSearch} class="flex gap-2">
			<Input type="text" placeholder="Enter your search query" class="flex-grow" bind:value={searchQuery} />
			<Button type="submit">
				<Search class="mr-2 h-4 w-4" />
				Search
			</Button>
		</form>
	</div>

	{#if searchResults.length > 0}
		<div class="grid gap-4">
			{#each searchResults as result}
				<Card>
					<CardContent class="p-4">
						<h2 class="text-xl font-semibold mb-2">{result.title}</h2>
						<p class="text-muted-foreground">{result.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	{:else if searchQuery}
		<p class="text-center text-muted-foreground">No results found for "{searchQuery}"</p>
	{/if}
</div>
