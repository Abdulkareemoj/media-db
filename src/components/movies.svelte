<script>
	import MovieCard from "./cards/MovieCard.svelte";

    export let movies

</script>
<h3>Movies</h3>
<div>
    <div>
{#each movies as movie}
    <MovieCard />

{/each}
    </div>
</div>