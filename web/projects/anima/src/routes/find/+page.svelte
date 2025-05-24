<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    console.log($page.url.pathname);
    
	onMount(() => {
		if ($page.url.pathname === '/find') {
			goto('/explore/anime');
		}
	});
</script>
