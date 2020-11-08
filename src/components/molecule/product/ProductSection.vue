<template>
	<div
    class="flex w-full container mx-auto mb-10 shadow-md"
    v-for="i in 3"
    :key="i"
  >
    <div class="w-1/5 ">
      <SideNav />
    </div>
    <div class="w-4/5 bg-white px-6 py-4">
      <TopBar @prev="onPrev"  @next="onNext" />

      <div class="grid git-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-6">
        <div v-for="(product, i) in products" :key="i">
          <ProductCard :id="product.id" />
        </div>
      </div>
      <div class="grid grid-cols-1">
        <img class="w-full mt-5" src="/images/add.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/common/SideNav.vue";
import TopBar from "@/components/common/TopBar.vue";
import ProductCard from "@/components/molecule/product/ProductCard.vue";
import { products } from "@/data/products"
export default {
  name: "ProductSection",
  components: {
    SideNav,
    TopBar,
    ProductCard,
  },
  data() {
    return {
      end: 8,
      start: 0
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