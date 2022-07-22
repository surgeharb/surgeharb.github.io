<script>
	import NewWallet from './NewWallet.svelte';
	import WalletCard from './WalletCard.svelte';

	let selectMode = false;

	const selectModeOn = () => {
		selectMode = true;
	};
</script>

<div class="flex justify-space-between align-center">
	<h3>My Wallets</h3>
	<img
		on:click={selectModeOn}
		src="/svg/multi-select.svg"
		alt="multi-select"
		width="26"
		height="26"
	/>
</div>
<section>
	<NewWallet />
	<div class="flex wrap">
		<WalletCard selected />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
	</div>
</section>

<style>
	h3 {
		margin-bottom: 0;
	}
	section {
		margin-top: 2rem;
		margin-bottom: 10rem;
	}
	div {
		gap: 1rem;
		margin-bottom: 2rem;
	}
	@media (min-width: 550px) {
		div {
			gap: 2rem;
		}
	}
</style>
