<script>
export async function load({fetch, params }){
const res = fetch(`//add req`)
const movieDetail = await  res.json()
if (res.ok){
    return{
        props: { movieDetail}
    }
}
}

/**
	 * @type {{ backdrop_path: string; title: string; overview: string; release_date: string; budget: string; vote_average: string; runtime: string; }}
	 */
 export let movieDetail
</script>
<div>
    <div>
        <img src={'link to image' + movieDetail.backdrop_path} alt={movieDetail.title} >
    </div>
    <div>
        <h1>
             {movieDetail.title } 
        </h1>
        <p>
            {movieDetail.overview}
        </p>
        <p><span>Release Date:</span>
            {movieDetail.release_date}<br />
            <span>Budget:</span>
            {movieDetail.budget}<br />
            <span>Rating</span>
            {movieDetail.vote_average}<br />
            <span>Runtime</span>
            {movieDetail.runtime}<br />
        </p>
    </div>
</div>