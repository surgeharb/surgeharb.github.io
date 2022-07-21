<script>
	export let size = 'md';
	export let circle = false;
	export let imageStyle = '';
	export let imageSrcSet = '';
	export let imageSrc = '';

	const imgSrc =
		imageSrc ||
		'https://assets.sherbet.com/tokens/831ef4f8-1a3d-4376-ad49-f42052d3bf60.png';

	const sizes = {
		xs: '36px',
		sm: '54px',
		md: '72px',
		lg: '108px',
		xl: '144px'
	};
</script>

<img
	src={imgSrc}
	srcset={imageSrcSet}
	width={sizes[size]}
	height={sizes[size]}
	style={imageStyle}
	alt="profile"
	class:circle
/>

<style>
	img {
		object-fit: cover;
		box-shadow: var(--box-shadow-md);
		border-radius: var(--border-radius);
	}
	.circle {
		border-radius: 50%;
	}
</style>
