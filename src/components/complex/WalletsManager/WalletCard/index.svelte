<script lang="ts">
	import Card from '../../../simple/Card/index.svelte';
	import Avatar from '../../../simple/Avatar/index.svelte';

	type Token = 'BTC' | 'ETH' | 'SOL' | 'AVAX';

	const imageTokenMap: Record<Token, string> = {
		BTC: '/images/btc.png',
		ETH: '/images/eth.png',
		SOL: '/images/sol.png',
		AVAX: '/images/avax.png'
	};

	export let name = 'Bitcoin Wallet';
	export let imageStyle = 'padding: .8rem';
	export let address = '0x12...89';
	export let balance = '1.1023';
	export let selected = false;
	export let token: Token = 'BTC';
	export let imageSrc = imageTokenMap[token];

	let copied = false;

	const copyAddressToClipboard = async () => {
		await navigator.clipboard.writeText(address);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<div class="wrapper" class:selected>
	<Card fullHeight mb0>
		<div class="card-container">
			<div class="avatar-container flex align-center justify-center">
				<Avatar size="sm" {imageSrc} {imageStyle} />
			</div>
			<div class="flex direction-column align-center justify-center">
				<h6>{name}</h6>
				<span>{balance} {token}</span>
			</div>
			<div class="copy" on:click={copyAddressToClipboard}>
				{#if !copied}
					<img src="/svg/copy.svg" alt="copy" height="14" width="14" />
				{:else}
					<img
						src="/svg/checkmark.svg"
						alt="checkmark"
						height="18"
						width="18"
					/>
				{/if}
			</div>
		</div>
	</Card>
</div>

<style src="./styles.css"></style>
