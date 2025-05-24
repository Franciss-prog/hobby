<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="dark:bg-black dark:text-white">
	{@render children()}
</main>
