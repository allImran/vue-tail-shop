<template>
  <HeaderTop/>
  <Header/>
  <HeaderBottom/>
  <router-view/>
</template>

<script>
  import HeaderTop from '@/components/common/HeaderTop'
  import Header from '@/components/common/Header'
  import HeaderBottom from '@/components/common/HeaderBottom'
  export default {
    name: 'App',
    components: {
      HeaderTop,
      Header,
      HeaderBottom
    }
  }
</script>

<style src="./assets/style/app.css" />

