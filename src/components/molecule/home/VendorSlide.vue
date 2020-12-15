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

            <template v-slot:top>
                <TextWithIcon
                    class="mt-2"
                    icon="mdi mdi-home"
                    iconStyle="text-pink-700 text-lg"
                    text="Our Project"
                    textStyle="text-md text-gray-700 font-bold"
                />
            </template>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '@/components/slider/Carousel'
import TriCard from '@/components/molecule/home/TriCard'
import {vendor} from '@/data/vendor.js'
import TextWithIcon from '@/components/atom/TextWithIcon';

  export default {
    name: 'VendorSlide',
    components:{
        Carousel,
        TriCard,
        TextWithIcon
    },
    props:{

    },
    data(){
      return{
        slides: vendor
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