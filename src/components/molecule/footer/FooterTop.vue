<template>

  <div class=" bg-white py-2">
    <div class="container mx-auto flex items-center">
      <h4 class="uppercase pr-8">categories</h4>
      <ClickbleItem
        v-for="(item, index) in headerBottom"
        :key="index"
        :text="item.title"
        textStyle="text-gray-700 text-md hover:text-blue-400 border-r-2 px-4"
        :icon="`mdi ${item.icon}`"
        :iconStyle="`${item.color} pl-2`"
        :link="`/category/${item.slug}`"
      />
    </div>
  </div>
</template>
<script>
import ClickbleItem from "@/components/atom/ClickbleItem"
import {headerBottom} from "@/data/headerBottom";
export default {
  name: "FooterTop",
  components: {
    ClickbleItem,
  },
  data() {
    return {

    };
  },
  computed: {
    headerBottom() {
      return headerBottom.slice(0,8);
    }
  },
};
</script>
