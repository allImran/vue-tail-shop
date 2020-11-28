<template>
  <div class="px-5 pb-5 mt-5 ">
    <TextWithIcon
        text="Certification"
        textStyle="capitalize text-lg text-blue-600 font-semibold"
        icon="mdi mdi-account"
        iconStyle=" text-xl text-blue-600"
    />
    <div class="grid md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 px-5 border-b pb-10">
      <Card
          v-for="(row, index) in certificates"
          :key="index"
          :image="row.image_url"
          imgStyle="h-48"
          title="Buet certified brand"
          titleStyle="font-semibold text-center text-sm text-gray-700 capitalize"
          border="border-2"
          subTitle="more detail will be here"
          subTitleStyle="text-center text-gray-600 text-sm capitalize"
          detail="Lorem ipsum dolor sit amet, consectetur adipisicin sed do eiusmod tempor ncididunt"
          detailStyle="text-center text-gray-500 text-sm w-full"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/atom/Card'
import TextWithIcon from '@/components/atom/TextWithIcon'
import { certificates } from "@/data/certificate";

export default {
  name: 'Certificate',
  components: {
    TextWithIcon,
    Card
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    certificates() {
      return certificates.slice(0,10);
    },
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>