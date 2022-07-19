<script>
	import Card from '../simple/Card.svelte';
</script>

<Card>
	<div class="flex direction-column justify-space-between align-center">
		<img
			src="https://assets.sherbet.com/tokens/831ef4f8-1a3d-4376-ad49-f42052d3bf60.png"
			class="profile-image"
			alt="profile"
		/>
		<h5>Serge Harb</h5>
	</div>
</Card>

<style>
	h5 {
		margin: 0;
		margin-top: 1.5rem;
		font-weight: 400;
	}

	.profile-image {
		width: 104px;
		height: 104px;
		object-fit: cover;
		border-radius: 52px;
	}
</style>
