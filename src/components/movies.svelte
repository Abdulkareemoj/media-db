<script>
		import MovieCard from "./cards/MovieCard.svelte";

export async function load({fetch}){
const res = fetch(`//add req`)
const data = await  res.json()
if (res.ok){
    return{
        props: { req: data.results}
    }
}
}

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


<script>

    export let req
</script>
<Movies movie = {req}/>

