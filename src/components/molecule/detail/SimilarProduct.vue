<template>
  <div class="bg-white pt-10 pb-5">
    <div class="container  mx-auto rounded border border-gray-300 p-4">
      <p class="font-semibold mb-3">Similar Product</p>
      <div class="grid md:grid-cols-5 grid-cols-2 gap-2">
        <div 
          class="mb-5" 
          v-for="(item, index) in products"
          :key="index"
        >
          <ProductCard :id="item.id" />
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from "@/components/molecule/product/ProductCard.vue";
  import { products } from "@/data/products";
  export default {
    name: 'SimilarProduct',
    components:{
      ProductCard
    },
    props:{

    },
    data(){
      return{
      }
    },
    computed:{
      products() {
        return products.slice(1, 6)
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