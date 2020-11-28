<template>

  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex items-center px-5 bg-gradient-to-r from-blue-500 to-teal-500">
        <span class="mdi mdi-flower"></span>
        <p class="uppercase text-gray-100 font-semibold text-sm pl-2 py-1">popular vendor</p>
      </div>

      <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6  gap-2 mt-5">
        <div
            v-for="(item, index) in popularVendor"
            :key="index"
        >
          <card
              titleStyle="capitalize text-gray-700 text-center w-full hover:text-blue-500"
              :title="item.title"
              :image="item.image_url"
              imgStyle="h-16 mx-auto w-32"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Card from "@/components/atom/Card"
import {popularVendor} from "@/data/popularVendor"

export default {
  name: 'VendorSection',
  components: {
    Card
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    popularVendor() {
      return popularVendor.slice(0, 12);
    }
  },
  watch: {},
  methods: {}
}
</script>