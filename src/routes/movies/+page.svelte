<script>
	import axios from 'axios';
	import PopularMovies from '../../components/popular/movies/PopularMovies.svelte';

	export async function getBoxOfficeMovies() {
		// const res = fetch(`//add req`);
		// const data = await res.json();
		

const options = {
  method: 'GET',
  url: 'https://movies-tv-shows-database.p.rapidapi.com/',
 params: {page: '1'},
  headers: {
    Type: 'get-boxoffice-movies',
    'X-RapidAPI-Key': '6e2ee20b4bmshebd08e1a40c4f9dp1c521djsn0f16dd4b3eff',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};

try {
	const res = await axios.request(options);
	console.log(res.data);
} catch (error) {
	console.error(error);
}
		if (res.ok) {
			return {
				props: { popular: data }
			};
		}
	}
	/**
	 * @type {unknown}
	 */ 
	 export let popular;
	export let movies;
</script>




<h3>Movies</h3>
<div>
	<div>
		
			<PopularMovies {popular}/>
	
	</div>
</div>


