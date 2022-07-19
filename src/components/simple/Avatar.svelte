<script>
	export let url = '';
	export let size = 'md';

	const imgSrc =
		url || 'https://assets.sherbet.com/tokens/831ef4f8-1a3d-4376-ad49-f42052d3bf60.png';

	const sizes = {
		sm: '36px',
		md: '72px',
		lg: '108px',
		xl: '144px'
	};
</script>

<img width={sizes[size]} height={sizes[size]} src={imgSrc} alt="profile" />

<style>
	img {
		object-fit: cover;
		border-radius: 50%;
		box-shadow: var(--box-shadow-sm);
	}
</style>
