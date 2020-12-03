<template>
  <div class="bg-gray-700">
    <div class="container  mx-auto flex items-center ">
      <div class="mr-2">
        <p class="truncate w-full text-xs font-semibold text-gray-100 uppercase ">marble cutter</p></div>

      <div class="border-r-2 border-l-2 border-gray-600 w-full">
        <div class="flex justify-between">
          <div class="flex items-center">
            <button>
              <span class="mdi mdi-chevron-left text-gray-100 text-2xl"></span>
            </button>
            <Tabs :tabs="headerBottom"/>
          </div>

          <button>
            <span class="mdi mdi-chevron-right text-gray-100 text-2xl"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from '@/components/atom/Tabs'
import {headerBottom} from "@/data/headerBottom";
export default {
  name: 'TopNavbar',
  components: {
    Tabs
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    headerBottom() {
      return headerBottom;
    }
  },
  watch: {},
  methods: {}
}
</script>