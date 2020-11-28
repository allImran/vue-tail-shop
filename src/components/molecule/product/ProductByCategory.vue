<template>
	<div class="container bg-white mx-auto shadow-md py-2 px-5 mb-5">
		<div class="flex mb-10">
			<TextWithIcon
				class="mt-3"
				icon="mdi mdi-check-decagram"
				iconStyle="text-pink-600 text-xl"
				text="Shop by items"
				textStyle="text-gray-700 font-bold text-xs sm:text-md truncate uppercase"
			/>
			<TopBar 
				tabPosition="justify-end" 
				tabMargin="ml-5"
			/>
		</div>

		<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2">
			<div 
				class="mb-5" 
				v-for="(item, index) in products"
				:key="index"
			>
				<ProductCard :id="item.id" />
			</div>
		</div>

	</div>
</template>

<script>
	import TextWithIcon from "@/components/atom/TextWithIcon";
	import TopBar from "@/components/molecule/navigation/TopBar.vue";
	import ProductCard from "@/components/molecule/product/ProductCard.vue";
	import { products } from "@/data/products"
	export default{
		name: 'ProductByCategory',
		components: {
			TextWithIcon,
			TopBar,
			ProductCard
		},
		computed: {
			products() {
				return products.slice(0, 8);
			}
		}
	}
</script>