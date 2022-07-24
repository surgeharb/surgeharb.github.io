<script>
	import Card from '../../simple/Card/index.svelte';
	import Avatar from '../../simple/Avatar/index.svelte';

	export let name = 'BTC';
	export let imageStyle = 'padding: 1rem';
	export let imageSrc = '/images/btc.png';
	export let address = '0x12...89';
	export let balance = '1.1023';
	export let token = 'BTC';
	export let selected = false;

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

<style>
	.wrapper {
		min-width: 162px;
		flex: 1;
	}
	.selected {
		border: 2px solid var(--primary-color);
		border-radius: var(--border-radius);
	}
	.card-container {
		position: relative;
	}
	.copy {
		cursor: pointer;
		padding: 0.7rem 1.2rem;
		position: absolute;
		right: -1.2rem;
		top: -2rem;
	}
	.flex {
		gap: 1rem;
		overflow: hidden;
	}
	.avatar-container {
		padding-bottom: 1.2rem;
	}
	h6 {
		margin-bottom: 0;
		font-weight: 500;
	}
</style>
