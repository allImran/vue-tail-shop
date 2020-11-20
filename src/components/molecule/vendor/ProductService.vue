<template>
	<div class="container bg-white mx-auto shadow-md py-2 px-5 pb-10 mb-5">
		<div class="flex mb-10">
			<TextWithIcon
				class="mt-3"
				icon=""
				iconStyle="text-pink-600 text-xl"
				text="Shop by items"
				textStyle="text-gray-700 mr-3 font-bold text-md truncate uppercase"
			/>
			<TopBar  tabMargin="mr-5"/>
		</div>

		<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 px-3">
			<div 
				class="mb-5" 
				v-for="(item, index) in products"
				:key="index"
			>
				<ProductCard :id="item.id" />
			</div>
		</div>
		<ProjectCardView>
			<template v-slot:top>
				<div class="flex justify-between mt-5 mb-3 pr-3">
					<p class="uppercase text-gray-700 font-bold">some of our project</p>
					<router-link 
						to="#" 
						class="text-blue-500 capitalize"
					>
						view all		
					</router-link>
				</div>
			</template>
		</ProjectCardView>

		<OurClient />

		<ClientTestimonial>
			<template v-slot:top>
				<p class="uppercase font-bold text-gray-700 mb-16 mt-16">client testimonial</p>
			</template>
		</ClientTestimonial>
	</div>
</template>

<script>
	import TextWithIcon from "@/components/atom/TextWithIcon";
	import TopBar from "@/components/molecule/navigation/TopBar.vue";
	import ProductCard from "@/components/molecule/product/ProductCard.vue";
	import ProjectCardView from "@/components/molecule/project/ProjectCardView.vue";
	import OurClient from "@/components/molecule/vendor/OurClient.vue";
	import ClientTestimonial from "@/components/molecule/vendor/ClientTestimonial.vue";
	import { products } from "@/data/products"
	export default{
		name: 'ProductByCategory',
		components: {
			TextWithIcon,
			TopBar,
			ProductCard,
			ProjectCardView,
			OurClient,
			ClientTestimonial
		},
		computed: {
			products() {
				return products.slice(0, 10);
			}
		}
	}
</script>