<script>
    export let movies
</script>

<div>
    <a href={"/movie/" + movie.id}>
        <img src={'link to image' + movie.poster_path} alt={movies.title} >
    </a>
<div>
    <h2>
    {movie.title}
</h2>    
    <p>{movies.release_date}</p>
    <h2></h2>
</div>
</div>

