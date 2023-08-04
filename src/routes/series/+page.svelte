<script context = "module">
		import SCard from "../../components/cards/SeriesCard.svelte";

export async function load({fetch}){
const res = fetch(`//add req`)
const data = await  res.json()
if (res.ok){
    return{
        props: { req: data.results}
    }
}
}

    export let req
export let series
</script>


<h3>Series</h3>
<div>
    <div>
{#each series as series}
    <SCard />

{/each}
    </div>
</div>



<Series series = {req}/>



