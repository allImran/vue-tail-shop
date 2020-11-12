<template>
	<img 
		:src="image" 
		alt=""
		class="w-32 h-32 shadow-md rounded-full" 
	>
</template>

<script>
	export default{
		name: 'RoundImage',
		props: {
			image: {
				default: '/images/square.jpg'
			}
		}
	}
</script>