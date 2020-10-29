<template>
  <HeaderTop/>
  <Header/>
  <HeaderBottom/>
  <router-view/>
  <FooterTop/>
  <FooterMiddle/>
</template>

<script>
  import HeaderTop from '@/components/common/HeaderTop'
  import Header from '@/components/common/Header'
  import HeaderBottom from '@/components/common/HeaderBottom'
  import FooterTop from '@/components/common/FooterTop'
  import FooterMiddle from '@/components/common/FooterMiddle'
  export default {
    name: 'App',
    components: {
      HeaderTop,
      Header,
      HeaderBottom,
      FooterTop,
      FooterMiddle
    }
  }
</script>

<style src="./assets/style/app.css" />

