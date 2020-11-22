<template>
    <div class="container mx-auto">
        <div class="flex items-center px-5 bg-gradient-to-r from-blue-500 to-teal-500">
            <span class="mdi mdi-phone"></span>
            <p class="uppercase text-gray-100 font-semibold text-sm pl-2 py-1">popular vendor</p>
        </div>

        <div class="grid grid-cols-6 gap-2 mt-5">
            <div 
                v-for="(item, index) in products"
                :key="index"
            >
                <card
                :title="item.vendor"
                image="/images/brand.png"
                imgStyle=" mx-auto w-32"
            />
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/atom/Card"
    import { products } from "@/data/products"
  export default {
    name: 'VendorSection',
    components:{
        Card
    },
    props:{

    },
    data(){
      return{

      }
    },
    computed:{
        products() {
            return products.slice(0, 12);
        }
    },
    watch:{

    },
    methods:{

    }
  }
</script>