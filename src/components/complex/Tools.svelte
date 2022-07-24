<script>
	import Card from '../simple/Card/index.svelte';
	import Avatar from '../simple/Avatar/index.svelte';
</script>

<Card>
	<div class="title-container flex align-center">
		<img src="/svg/archive.svg" alt="apps" width="24" height="24" />
		<h6 class="title">Awesome Tools</h6>
	</div>
	<a href="/tools/wallets-manager">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/wallet.webp?w=108&h=108 2x"
			/>
			<div class="flex align-center">Multi-Wallet Manager</div>
		</Card>
	</a>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/wallet.webp?w=108&h=108 2x"
			/>
			<div class="flex align-center">Wallet Tracker</div>
		</Card>
	</a>
	<a href="#" target="_blank">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=6&w=108&h=108 2x"
			/>
			<div class="flex align-center">Twitter Banner Generator</div>
		</Card>
	</a>
	<a href="https://bulksender.avasharks.io" target="_blank">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=144&h=144 2x"
			/>
			<div class="flex align-center">
				Avalanche Ava Sharks - NFTs Bulk Sender
			</div>
		</Card>
	</a>
</Card>

<style>
	.title-container {
		margin: 0;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	.title {
		font-weight: 600;
		color: var(--secondary-color);
	}
	h6 {
		margin-bottom: 0;
	}
	div {
		margin-left: 1.5rem;
	}
	a {
		margin-bottom: 1.5rem;
	}
	a:last-child {
		margin-bottom: 0;
	}
</style>
