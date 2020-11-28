<template>
	<div
    class="flex w-full container mx-auto mb-10 shadow-md"
    v-for="i in 3"
    :key="i"
  >
    <div class="w-1/5 hidden md:block lg:block xl:block">
      <SideNav />
    </div>

    <div class="sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 bg-white px-6 py-4">


      <div class="md:hidden">
        <SideNav />
      </div>

      <TopBar
        tabPosition="justify-start" class="hidden md:block"
      >
        <template v-slot:nav>
          <NextPrev class="relative" @next="onNext" @prev="onPrev"/>
        </template>
      </TopBar>

      <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
        <div v-for="(product, i) in products" :key="i">
          <ProductCard :url="product.image_url" :id="product.id" />
        </div>
      </div>
      <div class="grid grid-cols-1">
        <img class="w-full mt-5" src="/images/add.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/molecule/navigation/SideNav.vue";
import TopBar from "@/components/molecule/navigation/TopBar.vue";
import NextPrev from "@/components/atom/NextPrev"
import ProductCard from "@/components/molecule/product/ProductCard.vue";
import { products } from "@/data/products"
export default {
  name: "ProductSection",
  components: {
    SideNav,
    TopBar,
    NextPrev,
    ProductCard,
  },
  data() {
    return {
      start: 0,
      end: 8
    }
  },
  computed: {
    products() {
      return products.slice(this.start, this.end);
    }
  },
  methods: {
    onNext() {
      if(this.end < products.length) {
        this.start = this.end;
        this.end = this.end + 8;
      }
      
    },
    
    onPrev() {
      if(this.start > 0) {
        this.end = this.start;
        this.start = this.start - 8;
      }
    },

  }
};
</script>