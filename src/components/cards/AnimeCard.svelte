<script lang="ts">
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
import Img from '@zerodevx/svelte-img'
	export let anime;

	function truncateText(text, maxLength) {
		if (text.length <= maxLength) return text;
		return text.slice(0, maxLength) + "...";
	}
</script>

<Card class="w-full max-w-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
	<a href={"/details/" + anime.mal_id} class="block">
		<Img src={anime.images.jpg.image_url} alt={anime.title} class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
	</a>
	<CardHeader>
		<CardTitle class="text-xl font-bold truncate">{anime.title}</CardTitle>
	</CardHeader>
	<CardContent>
		<p class="text-sm text-muted-foreground">
			{truncateText(anime.synopsis, 100)}
		</p>
	</CardContent>
	<CardFooter>
		<Button variant="outline" class="w-full">
			<a href={"/details/" + anime.mal_id} class="w-full">View Details</a>
		</Button>
	</CardFooter>
</Card>
