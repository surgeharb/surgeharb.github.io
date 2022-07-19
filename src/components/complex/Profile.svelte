<script>
	import Card from '../simple/Card.svelte';
	import Avatar from '../simple/Avatar.svelte';
</script>

<Card>
	<div class="flex direction-column justify-space-between align-center">
		<Avatar size="lg" />
		<h5>Serge Harb</h5>
	</div>
</Card>

<style>
	h5 {
		margin: 0;
		margin-top: 1.5rem;
		font-weight: 400;
	}
</style>
