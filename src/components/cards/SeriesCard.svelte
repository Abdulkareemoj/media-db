<script>
	import SeriesCard from "./cards/MovieCard.svelte";

    export let series

</script>
<h3>series</h3>
<div>
    <div>
{#each series as series}
    <SeriesCard />

{/each}
    </div>
</div>