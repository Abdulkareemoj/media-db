<script>
	export let serials;
</script>

<div>
	<a href={'/serials/' + serials.show.id}>
		<img
			src={serials.show.image ? serials.show.image.medium : 'default_image_url'}
			alt={serials.show.name}
		/>
	</a>
	<div>
		<h2>{serials.show.name}</h2>
		<p>{serials.airdate}</p>
	</div>
</div>
