<script>
	import Avatar from '../simple/Avatar.svelte';
	import Card from '../simple/Card.svelte';

	export let link = '';
	export let name = '';
	export let image = '';
</script>

<a href={link || '#'} target="_blank">
	<Card mb0 hover>
		<div class="card-content">
			<Avatar url={image} />
			<span>{name || 'Unspecified'}</span>
		</div>
	</Card>
</a>

<style>
	.card-content {
		text-align: center;
	}
	a {
		display: block;
		width: 135px;
	}
</style>
