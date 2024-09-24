<script>
  export let anime;

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
  <a href={anime.url}>
    <img src={anime.poster ? `https://simkl.in/posters/${anime.poster}` : 'default_image_url'} alt={anime.title} class="w-full h-auto rounded-lg" />
  </a>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{anime.title}</h2>
    <p class="mt-2">{formatDate(anime.date)}</p>
    <p class="mt-2">{anime.ratings && anime.ratings.simkl ? anime.ratings.simkl.rating : 'No rating available'}</p>

    <!-- <p class="mt-2">{anime.genres ? anime.genres.join(', ') : 'No genres available'}</p> -->
  </div>
</div>