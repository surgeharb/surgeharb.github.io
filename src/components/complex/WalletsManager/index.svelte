<script lang="ts">
	import NewWallet from './NewWallet/index.svelte';
	import WalletCard from './WalletCard/index.svelte';
	import Modal from '../../simple/Modal/index.svelte';

	let showModal = false;
	let selectMode = false;

	const selectModeOn = () => {
		selectMode = true;
	};

	const openModal = () => {
		showModal = true;
	};

	const closeModal = () => {
		currentWalletAddress = '';
		currentWalletToken = '';
		currentWalletName = '';
		showModal = false;
	};

	const onSubmit = () => {
		wallets = [
			...wallets,
			{
				balance: 0,
				name: currentWalletName,
				token: currentWalletToken,
				address: currentWalletAddress
			}
		];

		closeModal();
	};

	let wallets: any[] = [];
	let currentWalletName = '';
	let currentWalletToken = '';
	let currentWalletAddress = '';
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
		{#each wallets as wallet}
			<WalletCard
				name={wallet.name}
				token={wallet.token}
				address={wallet.address}
			/>
		{/each}
	</div>
	{#if showModal}
		<Modal on:close={closeModal} on:submit={onSubmit}>
			<div slot="header">
				<h5>Insert Wallet Details</h5>
			</div>
			<input
				type="text"
				name="input-wallet-name"
				placeholder="wallet name"
				bind:value={currentWalletName}
			/>
			<input
				type="text"
				name="input-wallet-token"
				placeholder="wallet token"
				bind:value={currentWalletToken}
			/>
			<input
				type="text"
				name="input-wallet-address"
				placeholder="wallet address"
				bind:value={currentWalletAddress}
			/>
		</Modal>
	{/if}
</section>

<style src="./styles.css"></style>
