<script context = "module">
		import SeriesCard from "./cards/SeriesCard.svelte";

export async function load({fetch}){
const res = fetch(`//add req`)
const data = await  res.json()
if (res.ok){
    return{
        props: { req: data.results}
    }
}
}

export let series
</script>


<h3>Series</h3>
<div>
    <div>
{#each series as series}
    <SeriesCard />

{/each}
    </div>
</div>


<script>

    export let req
</script>


<Series series = {req}/>



