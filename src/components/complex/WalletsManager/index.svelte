<script>
	import NewWallet from './NewWallet.svelte';
	import WalletCard from './WalletCard.svelte';
	import Modal from '../../simple/Modal/index.svelte';

	let showModal = false;
	let selectMode = false;

	const selectModeOn = () => {
		selectMode = true;
	};

	const openModal = () => {
		showModal = true;
	};
</script>

<div class="flex justify-space-between align-center">
	<div class="flex header-container">
		<h3>My Wallets</h3>
		<img
			on:click={openModal}
			src="/svg/plus-circle.svg"
			class="add-wallet"
			alt="add wallet"
			height="24"
			width="24"
		/>
	</div>
	<img
		on:click={selectModeOn}
		src="/svg/multi-select.svg"
		alt="multi-select"
		width="26"
		height="26"
	/>
</div>
<section>
	<NewWallet onAddWallet={openModal} />
	<div class="flex wrap wallets-container">
		<WalletCard selected />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
		<WalletCard />
	</div>
	{#if showModal}
		<Modal on:close={() => (showModal = false)} />
	{/if}
</section>

<style>
	h3 {
		margin-bottom: 0;
	}
	section {
		margin-top: 2rem;
		margin-bottom: 10rem;
	}
	.header-container {
		align-items: center;
	}
	.add-wallet {
		cursor: pointer;
		margin-left: 1rem;
		margin-top: 0.3rem;
	}
	.wallets-container {
		gap: 1rem;
		margin-bottom: 2rem;
	}
	@media (min-width: 550px) {
		.wallets-container {
			gap: 2rem;
		}
	}
</style>
