<script lang="ts">
	import { page } from '$app/stores';
	import Category from '$lib/components/Category.svelte';
	$: data = $page.data.data.data;
	$: category = $page.params.category;
	$: index = $page.params.index;
	const pagination = $page.data.data.pagination.items.total;
</script>

<Category {data} {category} {index} {pagination} />
