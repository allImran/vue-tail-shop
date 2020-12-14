<template>
  <div class="flex flex-col">
    <div  :class="border">
      <img
        class="m-auto card-image"
        :class="imgStyle"
        :src="image"
        :alt="title"
      />
    </div>
    <router-link to="#">
      <p :class="titleStyle">{{ title }}</p>
    </router-link>
    <p :class="subTitleStyle">{{ subTitle }}</p>
    <p :class="detailStyle">{{ detail }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    border: {
      default: "border border-solid border-gray-300",
    },
    image: {
      default: "/images/certificate.png",
    },
    imgStyle: {
      default: "w-32",
    },
    title: {
      default: "Default title",
    },
    titleStyle: {
      default: "text-gray-700 text-center text-xs sm:text-base w-full hover:text-blue-500",
    },
    subTitle: String,
    subTitleStyle: {
      type: String,
      default: "text-gray-600 text-sm capitalize",
    },
    detail: String,
    detailStyle: {
      type: String,
      default: "text-gray-500 text-sm w-full",
    },
    link: {
      type: String,
      default: "/subcategory",
    },
  },
};
</script>
