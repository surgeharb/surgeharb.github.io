<script>
	import NewWallet from './NewWallet.svelte';
	import WalletCard from './WalletCard.svelte';
</script>

<h3>My Wallets</h3>
<section>
	<NewWallet />
	<div class="flex wrap">
		<WalletCard />
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
	section {
		margin-top: 2rem;
	}

	div {
		gap: 1rem;
		margin-bottom: 2rem;
	}
</style>
