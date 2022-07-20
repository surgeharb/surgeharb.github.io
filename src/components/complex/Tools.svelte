<script>
	import Avatar from '../simple/Avatar.svelte';
	import Card from '../simple/Card.svelte';
</script>

<Card>
	<h6 class="title">Awesome Tools</h6>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar size="sm" url="/images/wallet.webp" />
			<div class="flex align-center">Multi-Wallet Manager</div>
		</Card>
	</a>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar size="sm" url="/images/wallet.webp" />
			<div class="flex align-center">Wallet Tracker</div>
		</Card>
	</a>
	<a href="#" target="_blank">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				url="/images/twitter.jpeg"
				imageStyle="object-position: 0 -1px; background-color: #000443;"
			/>
			<div class="flex align-center">Twitter Banner Generator</div>
		</Card>
	</a>
	<a href="https://bulksender.avasharks.io" target="_blank">
		<Card h hover mb0 compact>
			<Avatar size="sm" url="/images/avasharks.jpeg" />
			<div class="flex align-center">
				Avalanche Ava Sharks - NFTs Bulk Sender
			</div>
		</Card>
	</a>
</Card>

<style>
	.title {
		font-weight: 600;
		color: var(--secondary-color);
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
