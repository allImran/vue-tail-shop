<template>
    <div>
        <p class="text-gray-600 text-sm mb-2">Availability: 
            <span class="text-green-500">In Stock</span>
        </p>
        <p class="text-gray-600 text-xs sm:text-sm mb-2">SKU: <span>1234</span></p>
        <p class="text-gray-600 text-xs sm:text-sm mb-2">Category: <span>Interior, House Design</span></p>
        <p class="text-blue-500 text-xs sm:text-sm mb-2">Free shipping and & return over $250</p>
        <SocialBox :links="links" text="follow on"/>
    </div>
</template>

<script>
    import {links}  from '@/data/products.js'
    import SocialBox from '@/components/atom/SocialBox'
  export default {
    name: 'Availability',
    components:{
        SocialBox
    },
    props:{

    },
    data(){
      return{

      }
    },
    computed:{
        links(){
            return links;
        }
    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>
  
</style>