<script>
	import Avatar from '../simple/Avatar.svelte';
	import Card from '../simple/Card.svelte';

	export let link = '';
	export let name = '';
	export let image = '';
	export let imageStyle = '';
</script>

<a href={link || '#'} target="_blank">
	<Card mb0 hover>
		<div class="flex direction-column justify-center align-center">
			<Avatar url={image} {imageStyle} />
			<span>{name || 'Unspecified'}</span>
		</div>
	</Card>
</a>

<style>
	.flex {
		gap: 1rem;
	}
	a {
		display: block;
		width: 140px;
	}
</style>
