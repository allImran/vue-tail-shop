<template>
  <slot name="top"></slot>
  <div :class="cardPadding" class="grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4 px-2">
    <GradientCard :key="i" v-for="(n, i) in 4"/>
  </div>
</template>

<script>
import GradientCard from '@/components/atom/GradientCard'

export default {
  name: 'ProjectCard',
  components: {
    GradientCard
  },
  props: {
    cardPadding:{
      default:'px-0'
    }
  },
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