<template>
    <div class="container mx-auto bg-white mt-5">
        <Carousel 
            :slides="slides"
            angleLeft="absolute leftmiddle text-white px-1 text-lg rounded-r py-2 bg-gray-800 cursor-pointer bg-opacity-25"
            angleRight="absolute rightmiddle text-white px-1 text-lg rounded-r py-2 bg-gray-800 cursor-pointer bg-opacity-25"
            singleSlideStyle="border-8 border-transparent"
        >
            <template v-slot="{slide}">
                <TriCard :slide="slide"/>
            </template>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '@/components/slider/Carousel'
import TriCard from '@/components/molecule/home/TriCard'
import {slides} from '@/data/slide.js'
  export default {
    name: 'VendorSlide',
    components:{
        Carousel,
        TriCard
    },
    props:{

    },
    data(){
      return{
        slides: slides
      }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>

</style>