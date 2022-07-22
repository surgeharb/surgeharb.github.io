<script>
	import Card from '../../simple/Card/index.svelte';
</script>

<div class="wrapper" on:click={() => console.log('adding new wallet')}>
	<Card mb0>
		<div class="img-container flex justify-center align-center">
			<img src="/svg/plus.svg" alt="plus icon" width="24" height="24" />
			<img
				class="show-on-hover"
				src="/svg/plus-hover.svg"
				alt="hover plus icon"
				width="24"
				height="24"
			/>
		</div>
	</Card>
</div>

<style>
	.wrapper {
		cursor: pointer;
		margin-bottom: 2rem;
	}

	.img-container {
		padding: 0.5rem;
	}

	.show-on-hover {
		display: none;
	}

	.wrapper:hover img {
		display: none;
	}

	.wrapper:hover .show-on-hover {
		display: block;
	}
</style>
