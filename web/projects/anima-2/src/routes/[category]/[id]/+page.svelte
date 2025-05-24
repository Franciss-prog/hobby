<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import { page } from '$app/stores';
	import { trimToFiveSentences } from '$lib/store/ui';
	const data = $page.data.data;
	const category = $page.params.category;
	const id = $page.params.id;
	$: synopsis = trimToFiveSentences(data.synopsis);
	$: about = trimToFiveSentences(data.about);


</script>

<Item

	{synopsis}
	{about}
	favorites={data.favorites}
	{id}
	{category}
	name={data.name}
	title={data.title}
	japaneseTitle={data.name_kanji}
	score={data.score}
	genres={data.genres}
	images={data.images}
/>
