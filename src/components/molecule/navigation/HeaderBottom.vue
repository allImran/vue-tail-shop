<template>
  <div class="pt-3">
    <div class="container mx-auto">
      <div class="flex justify-start flex-wrap">
        <router-link
            v-for="(row,index) in headerBottom"
            :class="`text-sm  hover:text-purple-900 pr-5 mb-3 ${/category/+ row.slug == $route.path ? 'text-purple-900 font-medium' : ''}`"
            :key="index"
            :to="`/category/${row.slug}`">
          <span :class="`mdi ${row.icon} ${row.color}`"></span>
          {{ row.title }}
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import {headerBottom} from "@/data/headerBottom";

export default {
  name: 'HeaderBottom',
  data() {
    return {

    }
  },

  computed: {
    headerBottom() {
      return headerBottom;
    }
  },
}
</script>