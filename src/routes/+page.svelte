<script>
	import { Card, CardContent } from "$lib/components/ui/card";
	import { TvMinimal, Film, Clapperboard, Book, Newspaper } from "svelte-lucide";

	const cards = [
		{ title: "Anime", href: "/anime", icon: TvMinimal },
		{ title: "Movies", href: "/movies", icon: Clapperboard },
		{ title: "Series", href: "/series", icon: Film },
		{ title: "Manga", href: "/manga", icon: Book },
		{ title: "News", href: "/news", icon: Newspaper },
	];
</script>

<div class="container mx-auto px-4 py-14">
	<h1 class="text-4xl font-bold mb-12 text-center">Welcome</h1>
	<div class="flex flex-col items-center">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mb-8">
			{#each cards.slice(0, 3) as card}
				<a href={card.href} class="block">
					<Card class="h-80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
						<CardContent class="h-full flex flex-col items-center justify-center p-8">
							<svelte:component this={card.icon} class="w-20 h-20 mb-6 text-primary" />
							<h2 class="text-2xl font-semibold text-center">{card.title}</h2>
						</CardContent>
					</Card>
				</a>
			{/each}
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full">
			{#each cards.slice(3) as card}
				<a href={card.href} class="block">
					<Card class="h-80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
						<CardContent class="h-full flex flex-col items-center justify-center p-8">
							<svelte:component this={card.icon} class="w-20 h-20 mb-6 text-primary" />
							<h2 class="text-2xl font-semibold text-center">{card.title}</h2>
						</CardContent>
					</Card>
				</a>
			{/each}
		</div>
	</div>
</div>
