<script>
	export let series;
</script>

<div>
	<a href={'/series/' + series.show.id}>
		<img
			src={series.show.image ? series.show.image.medium : 'default_image_url'}
			alt={series.show.name}
		/>
	</a>
	<div>
		<h2>{series.show.name}</h2>
		<p>{series.airdate}</p>
	</div>
</div>
