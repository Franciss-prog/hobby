<script lang="ts">
	export let count: number = 25; // number of cards to render
</script>

{#each Array.from({ length: count }) as _, i}
	<div class="skeleton overflow-hidden rounded-xl bg-gray-200 p-4 shadow-md dark:bg-black">
		<div class="mb-3 h-96 w-full rounded-md bg-gray-400"></div>
		<div class="mb-2 h-4 rounded bg-gray-400"></div>
		<div class="h-3 w-1/2 rounded bg-gray-400"></div>
	</div>
{/each}

<style>
	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
	.skeleton {
		animation: pulse 1.5s infinite ease-in-out;
	}
</style>
