<script>
	export let size = 'md';

	const sizes = {
		sm: '48px',
		md: '96px',
		lg: '132px',
		xl: '168px'
	};
</script>

<img
	width={sizes[size] || '48px'}
	height={sizes[size] || '48px'}
	src="https://assets.sherbet.com/tokens/831ef4f8-1a3d-4376-ad49-f42052d3bf60.png"
	alt="profile"
/>

<style>
	img {
		object-fit: cover;
		border-radius: 50%;
	}
</style>
