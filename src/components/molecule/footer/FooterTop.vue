<template>
  <div class=" bg-white py-2">
    <div class="container mx-auto flex">
      <h4 class="uppercase pr-8">categories</h4>
      <ClickbleItem
        v-for="(item, index) in menus"
        :key="index"
        :text="item.name"
        textStyle="text-gray-700 text-md hover:text-blue-400 border-r-2 px-2"
        :icon="`mdi ${item.icon}`"
        :iconStyle="`${item.color} pl-2`"
      />
    </div>
  </div>
</template>

<script>
import ClickbleItem from "@/components/atom/ClickbleItem";
export default {
  name: "FooterTop",
  components: {
    ClickbleItem,
  },
  data() {
    return {
      menus: [
        {
          name: "Office Supplies",
          icon: "mdi-briefcase-variant-outline",
          color: "text-red-400",
        },
        {
          name: "Cleaning",
          icon: "mdi-rocket-launch",
          color: "text-blue-700",
        },
        {
          name: "Solar",
          icon: "mdi-weight",
          color: "text-black-500",
        },
        {
          name: "It & Electronic",
          icon: "mdi-webrtc",
          color: "text-green-700",
        },
        {
          name: "Cleaning",
          icon: "mdi-rice",
          color: "text-purple-800",
        },
      ],
    };
  },
};
</script>
