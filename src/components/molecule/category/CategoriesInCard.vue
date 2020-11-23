<template>
	<div class="container mx-auto bg-white p-3 shadow-md mb-5">
		<TextWithIcon
			icon="mdi mdi-apps"
			iconStyle="text-pink-600 text-xl"
			text="shop by categories"
			textStyle="text-gray-700 text-md truncate uppercase font-bold"
		/>
		<div class="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2">
			<div
				v-for="(item, index) in products"
				:key="index"
			>
				<card
				:title="item.vendor"
			/>
			</div>
		</div>
	</div>
</template>

<script>
	import { products } from "@/data/products"
	import Card from "@/components/atom/Card"
	import TextWithIcon from "@/components/atom/TextWithIcon"
	export default{
		name: 'CategoryCardView',
		components: {
			TextWithIcon,
			Card
		},
		computed: {
			products() {
				return products.slice(0, 18);
			}
		}

	}
</script>