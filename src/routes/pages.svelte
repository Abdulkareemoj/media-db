<script context = "module">
export async function load({fetch}){
const res = fetch(`//add req`)
const data = await  res.json()
if (res.ok){
    return{
        props: { req: data.results}
    }
}
}

</script>

<script>
    import Movies from "../components/movies.svelte"
    import Anime from "../components/anime.svelte"
    import Series from "../components/series.svelte"


    export let req
</script>

<Movies movie = {req}/>
<Anime anime = {req}/>
<Series series = {req}/>
