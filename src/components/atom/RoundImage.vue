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
				tupe:String,
				default: '/images/square.jpg'
			},
			heightWeight: {
				tupe:String,
				default: 'w-32 h-32'
			}
		}
	}
</script>