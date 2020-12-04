<template>
  <router-link
      v-for="(item, index) in tabs"
      :key="index"
      :to="`/subcategory/${item.slug}`"
      :class="`${tabStyle} hover:text-gray-100 ${/subcategory/+ item.slug == $route.path ? 'text-purple-100 font-medium' : 'text-gray-400'}`"
  >
    {{ item.title }}
  </router-link>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    tabs: {
      default: [

        {title: 'Office supply', link: '/subcategory'},
        {title: 'Stationary', link: '/subcategory'},
        {title: 'Other', link: '/subcategory'},

      ]
    },
    tabStyle: {
      default: 'text-gray-400 px-3 text-sm capitalize'
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