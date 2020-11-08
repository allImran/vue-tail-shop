<template>
  <HeaderTop />
  <Header />
  <HeaderBottom />
  <slot />
  <FooterTop/>
  <FooterMiddle/>
  <FooterBottom/>
</template>

<script>
import HeaderTop from "@/components/molecule/navigation/HeaderTop";
import Header from "@/components/molecule/navigation/Header";
import HeaderBottom from "@/components/molecule/navigation/HeaderBottom";
import FooterTop from '@/components/molecule/footer/FooterTop'
import FooterMiddle from '@/components/molecule/footer/FooterMiddle'
import FooterBottom from '@/components/molecule/footer/FooterBottom'
export default {
  components: {
    HeaderTop,
    Header,
    HeaderBottom,
    FooterTop,
    FooterMiddle,
    FooterBottom
  },
};
</script>

<style></style>
