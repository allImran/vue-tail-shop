<template>
  <HeaderTop/>
  <Header/>
  <HeaderBottom/>
    <component :is="layout">
      <router-view />
    </component>
  <FooterTop/>
  <FooterMiddle/>
</template>

<script>
  import HeaderTop from '@/components/common/HeaderTop'
  import Header from '@/components/common/Header'
  import HeaderBottom from '@/components/common/HeaderBottom'
  import FooterTop from '@/components/common/FooterTop'
  import FooterMiddle from '@/components/common/FooterMiddle'
  const default_layout = "master";
  export default {
    name: 'App',
    components: {
      HeaderTop,
      Header,
      HeaderBottom,
      FooterTop,
      FooterMiddle
    },
    computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
  }
</script>

<style src="./assets/style/app.css" />
