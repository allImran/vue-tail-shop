<template>
  <p class="text-gray-700 text-xl font-bold mt-5 mb-3 capitalize">some of our client</p>
  <div class="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-4 px-3">
    <Card
        :key="index"
        v-for="(row, index) in someOfClients"
        :image="row.image_url"
        border="none"
    />
  </div>
</template>

<script>
import Card from '@/components/atom/Card'
import { someOfClients } from "@/data/products";

export default {
  name: 'OurClient',
  components: {
    Card
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    someOfClients() {
      return someOfClients.slice(0, 8);
    }
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>