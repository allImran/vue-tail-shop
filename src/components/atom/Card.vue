<template>
	<div class="flex flex-col">
		<div :class="`p-1 ${border}`">
			<img class="card-image" :src="image" alt="">
		</div>
		<router-link to="#">
			<p class="text-gray-600 text-center w-full hover:text-blue-500">{{ title }}</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		components: {
			
		},
		props: {
			title: {
				default: 'Default'
			},
			border: {
				default: 'border border-solid border-gray-300'
			},
			image: {
				default: '/images/product2.jpg'
			}
		}
	}
</script>