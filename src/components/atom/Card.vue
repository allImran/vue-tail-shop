<template>
	<div class="flex flex-col">
		<div :class="`p-1 ${border}`">
			<img class="card-image w-32 m-auto" :src="image" alt="">
		</div>
		<router-link to="#">
			<p :class="`${titleStyle}`">{{ title }}</p>
		</router-link>
			<p :class="`${subTitleStyle}`">{{ subTitle }}</p>
			<p :class="`${detailStyle}`">{{ detail }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		components: {
			
		},
		props: {
			border: {
				default: 'border border-solid border-gray-300'
			},
			image: {
				default: '/images/certificate.png'
			},
			title: {
				default: 'Defaule title'
			},
			titleStyle: {
				default: 'text-gray-700 text-center w-full hover:text-blue-500'
			}, 
			subTitle: String,
			subTitleStyle: {
				default: 'text-gray-600 text-sm capitalize'
			}, 
			detail: String,
			detailStyle: {
				default: 'text-gray-500 text-sm w-full'
			}, 

		}
	}
</script>