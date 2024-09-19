<script>
  import { Button } from "$lib/components/ui/button";
  import { Moon, Sun } from "svelte-lucide";
  import { writable } from "svelte/store";

  // Create a writable store for the theme
  const theme = writable("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    theme.update(current => current === "dark" ? "light" : "dark");
  };
</script>

<Button variant="ghost" class="w-9 px-0" on:click={toggleTheme}>
  {#if $theme === "dark"}
    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
  {:else}
    <Moon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
  {/if}
  <span class="sr-only">Toggle theme</span>
</Button>