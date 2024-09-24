<script>
  export let anime;
</script>

<div class="border border-gray-300 p-4 m-4 rounded-lg shadow-md">
  <a href={anime.url}>
    <img src={anime.poster ? `https://simkl.in/posters/${anime.poster}` : 'default_image_url'} alt={anime.title} class="w-full h-auto rounded-lg" />
  </a>
  <div class="mt-4">
    <h2 class="text-xl font-semibold">{anime.title}</h2>
    <p class="mt-2">{anime.release_date}</p>
    <p class="mt-2">{anime.overview}</p>
    <p class="mt-2">{anime.genres.join(', ')}</p>
  </div>
</div>