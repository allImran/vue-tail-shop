<template>
  <div class="container mx-auto bg-white shadow-md mb-5 pb-24 px-5 py-10">
    <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 px-5">
      <TextWithBgImage
          title="Our Mission"
          detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TextWithBgImage
          title="Our Vision"
          detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>

<!--    <CertificateCardView/>-->

    <Carousel headerText="CERTIFICATION, AUTHORIZATION & LICENCES" :slides="certificates" :responsive="certificateCarousel">
      <template v-slot="{slide}">
        <Card
            :image="slide.image_url"
            imgStyle="h-32"
            title="Buet certified brand"
            titleStyle="font-semibold text-sm text-gray-700 capitalize text-center mt-4"
            border="border-0"
            subTitle="more detail will be here"
            subTitleStyle="text-xs sm:text-sm text-center"
            detailStyle="text-xs text-center"
            detail="Lorem ipsum dolor sit amet, consectetur adipisicin sed do eiusmod tempor ncididunt"
        />
      </template>
    </Carousel>

<!--    <ManagementTeam>
      <template v-slot:top>
        <p class="uppercase font-bold text-gray-700 mt-16 mb-8">Our Management</p>
      </template>
    </ManagementTeam>-->

    <Carousel headerText="Our Management" :slides="certificates" :responsive="certificateCarousel">
      <template v-slot="{slide}">
        <div
            class="flex justify-center items-center">
          <RoundImage
              :image="slide.image_url"
              heightWeight="w-16 h-16 sm:w-24 sm:h-24"
          />
          <div>
            <p class="ml-3 text-sm sm:text-md font-semibold text-gray-700">Comandar Bolta</p>
            <p class="ml-3 text-xs text-gray-600">Team Co-Ordinator</p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import TextWithBgImage from '@/components/atom/TextWithBgImage'
// import CertificateCardView from '@/components/molecule/vendor/CertificateCardView'
// import ManagementTeam from '@/components/molecule/vendor/ManagementTeam'
import Carousel from '@/components/slider/Carousel'
import Card from '@/components/atom/Card'
import RoundImage from '@/components/atom/RoundImage'
import { certificates } from "@/data/certificate"
import {certificateCarousel} from '@/config/certificateCarousel'

export default {
  name: 'AboutUs',
  components: {
    TextWithBgImage,
    // CertificateCardView,
    // ManagementTeam,
    Carousel,
    Card,
    RoundImage,

  },
  props: {},
  data() {
    return {
      certificateCarousel
    }
  },
  computed: {
    certificates() {
      return certificates;
    }
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>