<script>
    export let animes
</script>

<div>
    <a href={"/anime/" + anime.id}>
        <img src={'link to image' + anime.poster_path} alt={animes.title} >
    </a>
<div>
    <h2>
    {anime.title}
</h2>    
    <p>{animes.release_date}</p>
    <h2></h2>
</div>
</div>
