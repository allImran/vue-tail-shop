<template>
	<img 
		:src="image" 
		alt=""
		:class="`${heightWeight} shadow-md rounded-full`" 
	>
</template>

<script>
	export default{
		name: 'RoundImage',
		props: {
			image: {
				type:String,
				default: '/images/square.jpg'
			},
			heightWeight: {
				type:String,
				default: 'w-32 h-32'
			}
		}
	}
</script>