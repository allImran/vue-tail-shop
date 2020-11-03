<template>
  <HeaderTop />
  <Header />
  <HeaderBottom />
  <slot />
    <FooterTop/>
  <FooterMiddle/>
</template>

<script>
import HeaderTop from "@/components/common/HeaderTop";
import Header from "@/components/common/Header";
import HeaderBottom from "@/components/common/HeaderBottom";
import FooterTop from '@/components/common/FooterTop'
import FooterMiddle from '@/components/common/FooterMiddle'
export default {
  components: {
    HeaderTop,
    Header,
    HeaderBottom,
    FooterTop,
    FooterMiddle
  },
};
</script>

<style></style>
