<script>
	import Card from '../../../simple/Card/index.svelte';

	export let onAddWallet = () => {};
</script>

<div class="wrapper">
	<Card mb0 compact>
		<div
			on:click={onAddWallet}
			class="img-container flex justify-center align-center"
		>
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

<style src="./styles.css"></style>
