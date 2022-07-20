<script>
	export let url = '';
	export let size = 'md';
	export let circle = false;
	export let imageStyle = '';

	const imgSrc =
		url ||
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
