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
import HeaderTop from "@/components/common/HeaderTop";
import Header from "@/components/common/Header";
import HeaderBottom from "@/components/common/HeaderBottom";
import FooterTop from '@/components/common/FooterTop'
import FooterMiddle from '@/components/common/FooterMiddle'
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
