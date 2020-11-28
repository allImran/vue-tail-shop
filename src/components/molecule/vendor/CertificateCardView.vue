<template>
  <p class="uppercase font-bold text-gray-700 mb-5 mt-10">Certification, Authorization & Licences</p>
  <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4 px-5">
    <Card
        v-for="(n, i) in 5"
        :key="i"
        title="Buet certified brand"
        titleStyle="font-semibold text-sm text-gray-700 capitalize text-center"
        border="border"
        subTitle="more detail will be here"
        subTitleStyle="text-xs sm:text-sm text-center"
        detailStyle="text-xs sm:text-sm text-center"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicin sed do eiusmod tempor ncididunt"
    />
  </div>
</template>

<script>
import Card from '@/components/atom/Card'

export default {
  name: 'CertificateCardView',
  components: {
    Card
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style>

</style>