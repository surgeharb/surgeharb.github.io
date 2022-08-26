<script lang="ts">
	import { getWalletBalance } from '../../../utils/wallet';
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
		currentWalletType = '';
		currentWalletName = '';
		showModal = false;
	};

	const onSubmit = async () => {
		const [currentWalletChain, currentWalletToken] =
			currentWalletType.split(':');

		wallets = [
			...wallets,
			{
				name: currentWalletName,
				token: currentWalletToken,
				chain: currentWalletChain,
				address: currentWalletAddress,
				balance: await getWalletBalance(
					currentWalletAddress,
					currentWalletChain
				)
			}
		];

		window.localStorage.setItem('wallets', JSON.stringify(wallets));

		closeModal();
	};

	const onChangeWalletType = (e: any) => (currentWalletType = e.target.value);

	const storageWallets =
		typeof window !== 'undefined'
			? window.localStorage.getItem('wallets')
			: null;

	const walletsParsed = storageWallets ? JSON.parse(storageWallets) : [];

	let wallets: any[] = [];

	(async () => {
		wallets = await Promise.all(
			walletsParsed.map(async (wallet: any) => ({
				...wallet,
				balance: await getWalletBalance(wallet.address, wallet.chain)
			}))
		);
	})();

	let currentWalletName = '';
	let currentWalletType = '';
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
				balance={wallet.balance}
			/>
		{/each}
	</div>
	{#if showModal}
		<Modal on:close={closeModal} on:submit={onSubmit}>
			<div slot="header">
				<h5>Insert Wallet Details</h5>
			</div>
			<select value={currentWalletType} on:change={onChangeWalletType}>
				<option value="" disabled>Select wallet type</option>
				<option value="eth:ETH">Ethereum</option>
				<option value="avalanche:AVAX">Avalanche C-Chain</option>
				<option value="polygon:MATIC">Polygon Matic</option>
				<option value="solana:SOL">Solana</option>
				<option value="bsc:BNB">BNB</option>
			</select>
			<input
				type="text"
				name="input-wallet-name"
				placeholder="Type a wallet name"
				bind:value={currentWalletName}
			/>
			<input
				type="text"
				name="input-wallet-address"
				placeholder="Type your wallet address"
				bind:value={currentWalletAddress}
			/>
		</Modal>
	{/if}
</section>

<style src="./styles.css"></style>
