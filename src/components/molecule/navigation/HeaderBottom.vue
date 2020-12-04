<template>
  <div class="pt-3">
    <div class="container mx-auto">
      <div class="flex justify-start flex-wrap">
        <router-link
            class="text-sm hover:text-purple-800 pr-5 mb-3"
            v-for="(row,index) in headerBottom"
            :key="index"
            :to="`/category/${row.slug}`">{{ row.title }}
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