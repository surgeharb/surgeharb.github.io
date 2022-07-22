<script>
	import Card from '../../simple/Card/index.svelte';
	import Avatar from '../../simple/Avatar/index.svelte';
</script>

<div class="wrapper">
	<Card fullHeight mb0>
		<div class="flex align-center">
			<Avatar size="sm" />
		</div>
	</Card>
</div>

<style>
	.wrapper {
		width: calc(50% - 0.5rem);
		height: 200px;
	}
</style>
