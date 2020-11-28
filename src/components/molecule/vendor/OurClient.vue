<template>
  <p class="text-gray-700 text-xl font-bold mt-5 mb-3 capitalize">some of our client</p>
  <div class="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-4 px-3">
    <Card
        :key="index"
        v-for="(row, index) in some_of_clients"
        image="/images/google.png"
        border="none"
    />
  </div>
</template>

<script>
import Card from '@/components/atom/Card'
import {some_of_clients} from "@/data/products";

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
    some_of_clients() {
      return some_of_clients.slice(0, 8);
    }
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>