<template>
  <div class="relative right-arrow">
    <div class="w-1/2 bg-indigo-200 p-4 h-screen">
      <ul>

        <mega-menu-title v-for="(row,index) in headerBottom" :key="index" :title="row.title" :items="row.items" />

      </ul>
    </div>
  </div>
</template>

<script>
import MegaMenuTitle from "@/components/atom/mobileMenu/MegaMenuTitle"
import {headerBottom} from "@/data/headerBottom";
export default {
  name: 'MegaMenu',
  data() {
    return {

    };
  },

  components: {
    MegaMenuTitle,
  },

  computed:{
    headerBottom() {
      return headerBottom;
    }
  },

  watch:{

  },

  methods:{

  }
}
</script>

<style scoped>

</style> 
