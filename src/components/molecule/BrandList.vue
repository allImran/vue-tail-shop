<template>
  <div class="container bg-white mx-auto py-1 px-5 my-10">
    <div class="flex w-full">
      <TextWithIcon
          class="mt-3"
          icon="mdi mdi-check-decagram"
          iconStyle="text-pink-600 text-xl"
          :text="textTitle"
          :textStyle="textStyle"
      />
      <slot name="topbar"></slot>
    </div>

    <div class="flex flex-wrap justify-center">
      <div
          v-for="(row,index) in items"
          :key="index"
          class="xl:w-1/6 md:w-1/6 w-1/4">
        <img :class="imageStyle" :src="row.image_url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TextWithIcon from "@/components/atom/TextWithIcon"

export default {
  name: 'BrandList',
  props:{
    textTitle:{
      default:'Featured Brands'
    },
    textStyle:{
      default: 'uppercase text-gray-700 text-xs truncate'
    },
    imageStyle:{
      default:'w-full'
    },
    items: {
      default: [

        {id: 1, image_url: '/images/band/1.png'},
        {id: 2, image_url: '/images/band/2.png'},
        {id: 3, image_url: '/images/band/3.png'},

      ]
    },
  },
  components: {
    TextWithIcon
  }
}
</script>