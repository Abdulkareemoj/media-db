<script>
    export let series
</script>

<div>
    <a href={"/series/" + series.id}>
        <img src={'link to image' + series.poster_path} alt={series.title} >
    </a>
<div>
    <h2>
    {series.title}
</h2>    
    <p>{series.release_date}</p>
    <h2></h2>
</div>
</div>
