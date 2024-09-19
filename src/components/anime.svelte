<script>
		import AnimeCard from "./cards/AnimeCard.svelte";

export async function load({fetch}){
const res = fetch(`//add req`)
const data = await  res.json()
if (res.ok){
    return{
        props: { req: data.results}
    }
}
}

export let animes
</script>


<h3>Anime</h3>
<div>
    <div>
{#each animes as anime}
    <AnimeCard />

{/each}
    </div>
</div>


<script>

    export let req
</script>

<Anime anime = {req}/>

