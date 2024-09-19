<script>
		import ACard from "../../components/cards/AnimeCard.svelte";


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
export let req
</script>


<h3>Anime</h3>
<div>
    <div>
{#each animes as anime}
    <ACard />

{/each}
    </div>
</div>



<Anime anime = {req}/>

