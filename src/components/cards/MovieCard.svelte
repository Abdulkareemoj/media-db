<script>
    /**
	 * @type {{ id: string; poster_path: string; title: any; release_date: any; }}
	 */
     export let movie
</script>

<div>
    <a href={"/movie/" + movie.id}>
        <img src={'link to image' + movie.poster_path} alt={movie.title} >
    </a>
<div>
    <h2>
    {movie.title}
</h2>    
    <p>{movie.release_date}</p>
    <!-- <h2></h2> -->
</div>
</div> 