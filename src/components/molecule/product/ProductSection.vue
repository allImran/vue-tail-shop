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
      <TopBar />

      <div class="grid git-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-6">
        <div v-for="(n, i) in 8" :key="i">
          <ProductCard />
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
export default {
  name: "ProductSection",
  components: {
    SideNav,
    TopBar,
    ProductCard,
  },
};
</script>