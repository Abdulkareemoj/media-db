<script>
	import { Menu, Search } from "svelte-lucide";;
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Sheet, SheetContent, SheetTrigger } from "$lib/components/ui/sheet";
	import ModeToggle from "./modeToggle.svelte";

	let isOpen = false;

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/anime", label: "Anime" },
		{ href: "/Series", label: "Series" },
		{ href: "/Movies", label: "Movies" },
	];

	const mobileNavItems = [
		{ href: "/", label: "Strmr" },
		{ href: "/anime", label: "Anime" },
		{ href: "/movies", label: "Shorts" },
		{ href: "/series", label: "Series" },
	];

	function toggleSheet() {
		isOpen = !isOpen;
	}
</script>

<header class="bg-background/70 sticky top-0 z-50 flex h-16 items-center gap-4 border-b px-4 backdrop-blur md:px-6">
	<nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
		{#each navItems as item}
			<a href={item.href} class="text-muted-foreground hover:text-foreground transition-colors">
				{item.label}
			</a>
		{/each}
	</nav>

	<Sheet bind:open={isOpen}>
		<SheetTrigger >
			<Button variant="outline" size="icon" class="shrink-0 md:hidden" onclick={toggleSheet}>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</SheetTrigger>
		<SheetContent side="left" onclick={toggleSheet}>
			<nav class="grid gap-6 text-lg font-medium">
				{#each mobileNavItems as item}
					<a href={item.href} class="text-muted-foreground hover:text-foreground">
						{item.label}
					</a>
				{/each}
			</nav>
		</SheetContent>
	</Sheet>

	<div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
		<form class="ml-auto flex-1 sm:flex-initial">
			<div class="relative">
				<Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
				<Input type="search" placeholder="Search products..." class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
			</div>
		</form>
		<ModeToggle />
	</div>
</header>
