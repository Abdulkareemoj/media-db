<script>
	import { Card, CardContent } from "$lib/components/ui/card";
	import { TvMinimal, Film, Clapperboard } from "svelte-lucide";;

	const cards = [
		{ title: "Anime", href: "/anime", icon: TvMinimal },
		{ title: "Movies", href: "/movies", icon: Clapperboard },
		{ title: "Series", href: "/series", icon: Film },
	];
</script>


<div class="container mx-auto px-4 py-14">
	<h1 class="text-4xl font-bold mb-12 text-center">Welcome</h1>
	<div class="flex justify-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
			{#each cards as card}
				<a href={card.href} class="block">
					<Card class="h-96 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
						<CardContent class="h-full flex flex-col items-center justify-center p-8">
							<svelte:component this={card.icon} class="w-24 h-24 mb-8 text-primary" />
							<h2 class="text-3xl font-semibold text-center">{card.title}</h2>
						</CardContent>
					</Card>
				</a>
			{/each}
		</div>
	</div>
</div>