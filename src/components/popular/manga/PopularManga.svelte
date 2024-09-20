<script>
	import MovieCard from '../../cards/MovieCard.svelte';

	 export let popular;
</script>

<h3>
	Popular Movies
	<div>
		{#each popular as movie}
			<div>
				<MovieCard />
			</div>
		{/each}
	</div>
</h3>
