<script>
	import AnimeCard from "./cards/AnimeCard.svelte";

    export let AnimeCard

</script>
<h3>AnimeCard</h3>
<div>
    <div>
{#each AnimeCard as anime}
    <AnimeCard />

{/each}
    </div>
</div>