<template>
    <component :is="layout">
      <router-view />
    </component>
</template>

<script>

  const default_layout = "master";
  export default {
    name: 'App',
    computed: {
    layout() {
        return (this.$route.meta.layout || default_layout) + "-layout";
      },
    },
  }
</script>

<style>
  @import url('./assets/style/app.css');
  @import url('./assets/style/style.css');
  @import url('./assets/style/slider.css');
</style>
