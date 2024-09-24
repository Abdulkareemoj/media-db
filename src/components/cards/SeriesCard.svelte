<script>
  export let serials;

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

  <a href={serials.url}>
    <img src={serials.poster ? `https://simkl.in/posters/${serials.poster}` : 'default_image_url'} alt={serials.title} class="w-full h-auto rounded-lg" />
  </a>
   <div class="mt-4">
    <h2 class="text-xl font-semibold">{serials.title}</h2>
    <p class="mt-2">{formatDate(serials.date)}</p>
    <p class="mt-2">{serials.ratings && serials.ratings.simkl ? serials.ratings.simkl.rating : 'No rating available'}</p>

    <!-- <p class="mt-2">{serials.genres ? serials.genres.join(', ') : 'No genres available'}</p> -->
  </div>

</div>