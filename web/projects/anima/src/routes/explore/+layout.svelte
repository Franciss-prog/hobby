<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<main class="bg-white dark:bg-black dark:text-white">
	<div class="p-16">
		<Navbar />
		{@render children()}
	</div>
</main>
