<template>
  <HeaderTop />
  <Header class="hidden md:block" />
  <MobileHeader class="md:hidden" />
  <HeaderBottom />
  <slot />
  <FooterTop class="hidden md:block lg:block xl:block"/>
  <FooterMiddle/>
  <FooterBottom/>
  <FooterCopyWrite/>
</template>

<script>
import HeaderTop from "@/components/molecule/navigation/HeaderTop";
import Header from "@/components/molecule/navigation/Header";
import MobileHeader from "@/components/molecule/navigation/mobile/MobileHeader";
import HeaderBottom from "@/components/molecule/navigation/HeaderBottom";
import FooterTop from '@/components/molecule/footer/FooterTop'
import FooterMiddle from '@/components/molecule/footer/FooterMiddle'
import FooterBottom from '@/components/molecule/footer/FooterBottom'
import FooterCopyWrite from '@/components/molecule/footer/FooterCopyWrite'
export default {
  components: {
    HeaderTop,
    Header,
    MobileHeader,
    HeaderBottom,
    FooterTop,
    FooterMiddle,
    FooterBottom,
    FooterCopyWrite,
  },
};
</script>

<style></style>
