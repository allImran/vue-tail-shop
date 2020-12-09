<template>
	<div class="container bg-white mx-auto shadow-md py-2 px-5 pb-10 mb-5">
		<div class="flex mb-10">
			<TextWithIcon
				class="mt-3"
				icon=""
				iconStyle="text-pink-600 text-xl"
				:text="textTitle"
				textStyle="text-gray-700 mr-3 font-bold text-md truncate uppercase"
			/>
			<TopBar  tabMargin="mr-5"/>
		</div>

		<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-2 px-3">
			<div 
				class="mb-5" 
				v-for="(item, index) in products"
				:key="index"
			>
				<ProductCard :url="item.image_url" :id="item.id" />
			</div>
		</div>


    <Carousel header-text="some of our project" :slides="slides" :responsive="responsive">
      <template v-slot="{slide}">
        <GradientCard :image="slide.img"/>
      </template>
    </Carousel>

    <Carousel header-text="some of our client" :slides="someOfClients" :responsive="someOfOurClientCarousel">
      <template v-slot="{slide}">
          <Card
              :image="slide.image_url"
              border="none"
          />
      </template>
    </Carousel>

<!--		<OurClient />-->

		<ClientTestimonial>
			<template v-slot:top>
				<p class="uppercase font-bold text-gray-700 mb-16 mt-16">client testimonial</p>
			</template>
		</ClientTestimonial>
	</div>
</template>

<script>
	import TextWithIcon from "@/components/atom/TextWithIcon"
	import TopBar from "@/components/molecule/navigation/TopBar.vue"
	import ProductCard from "@/components/molecule/product/ProductCard.vue"
	// import OurClient from "@/components/molecule/vendor/OurClient.vue"
	import ClientTestimonial from "@/components/molecule/vendor/ClientTestimonial.vue"
  import GradientCard from '@/components/atom/GradientCard'
  import Carousel from '@/components/slider/Carousel'
  import Card from '@/components/atom/Card'
  import {slides} from '@/data/slide.js'
	import { products } from "@/data/products"
  import {responsive} from '@/config/carousel'
  import {someOfOurClientCarousel} from '@/config/someOfOurClientCarousel'
  import { someOfClients } from "@/data/products";
	export default{
		name: 'ProductByCategory',

    props:{
      textTitle: {
        default : 'Shop by items',
      }
    },
		components: {
			TextWithIcon,
			TopBar,
			ProductCard,
			// OurClient,
			ClientTestimonial,
      Carousel,
      GradientCard,
      Card
		},
    data() {
      return {
        slides: slides,
        responsive,
        someOfOurClientCarousel
      }
    },
		computed: {
			products() {
				return products.slice(0, 10);
			},
      someOfClients() {
        return someOfClients;
      }
		}
	}
</script>