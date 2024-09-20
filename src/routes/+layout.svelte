<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
	import '../app.css';
	import Header from "../components/header.svelte";
</script>
<ModeWatcher />
<Header />
<div></div>
<slot />