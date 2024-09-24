<script>
  export let movie;

  // Function to format the date
  /**
	 * @param {string | number | Date} dateString
	 */
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }
</script>

<div class="border border-gray-300 p-4 m-4 rounded-lg shadow-md">
  <a href={movie.url}>
    <img src={movie.poster ? `https://simkl.in/posters/${movie.poster}` : 'default_image_url'} alt={movie.title} class="w-full h-auto rounded-lg" />
  </a>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{movie.title}</h2>
    <p class="mt-2">{formatDate(movie.release_date)}</p>
    <p class="mt-2">{movie.ratings && movie.ratings.simkl ? movie.ratings.simkl.rating : 'No rating available'}</p>

    <!-- <p class="mt-2">{movie.genres ? movie.genres.join(', ') : 'No genres available'}</p> -->
  </div>
</div>