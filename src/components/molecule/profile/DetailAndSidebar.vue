<template>
  <div class="container mx-auto mt-5 mb-5">
    <div class="grid grid-cols-3 gap-10 rounded">
      <div class="col-span-3 sm:col-span-2 bg-white shadow-md pt-4">
        <TopBar
            tabMargin="ml-5 uppercase font-semibold"
        />

        <About/>


        <div class="px-3">
          <Carousel headerTextStyle="font-bold text-xl text-blue-600 my-2 uppercase px-2" headerText="Skills" :slides="skills" :responsive="skillCarousel">
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <div class="flex flex-col items-center">
                  <p class="text-sm text-gray-700 mb-3">{{ slide.title }}</p>
                  <CircularProgress :percentage="slide.percentage"/>
                </div>
              </div>

            </template>
          </Carousel>

          <div class="flex mt-3">
            <p
                v-for="(n, i) in 5"
                :key="i"
                class="bg-gray-300 mr-2 font-semibold text-xs text-gray-800 px-3 rounded py-1"
            >
              Skill Set
            </p>
          </div>

          <Carousel headerTextStyle="font-bold text-xl text-blue-600 my-2 uppercase" headerText="some of our project" :slides="slides" :responsive="responsive">
            <template v-slot="{slide}">
              <GradientCard :image="slide.img"/>
            </template>
          </Carousel>

          <Carousel headerTextStyle="font-bold text-xl text-blue-600 my-2 uppercase" headerText="Certification" :slides="certificates" :responsive="certificateCarousel">
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

          <Carousel headerTextStyle="font-bold text-xl text-blue-600 my-2 uppercase" headerText="Experience" :slides="slides" :responsive="experienceCarousel">
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <RoundedImage
                    :image="slide.img"
                    heightWeight="w-20 h-20"
                />
                <Bordered/>
              </div>

            </template>
          </Carousel>

          <Carousel headerTextStyle="font-bold text-xl text-blue-600 my-2 uppercase" headerText="Education" :slides="slides" :responsive="experienceCarousel">
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <RoundedImage
                    :image="slide.img"
                    heightWeight="w-20 h-20"
                />
                <Bordered/>
              </div>
            </template>
          </Carousel>
        </div>



      </div>
      <div class="col-span-3 sm:col-span-1">
        <Sidebar/>
      </div>
    </div>
  </div>

</template>

<script>
import TopBar from '@/components/molecule/navigation/TopBar'
import About from '@/components/molecule/profile/About'
import Sidebar from '@/components/molecule/profile/Sidebar'
import GradientCard from '@/components/atom/GradientCard'
import Carousel from '@/components/slider/Carousel'
import Card from '@/components/atom/Card'
import Bordered from '@/components/molecule/profile/Bordered'
import RoundedImage from '@/components/atom/RoundImage'
import CircularProgress from '@/components/atom/CircularProgress'
import {skills} from '@/data/skill'
import {slides} from '@/data/slide.js'
import {responsive} from '@/config/carousel'
import { certificates } from "@/data/certificate"
import {certificateCarousel} from '@/config/certificateCarousel'
import {experienceCarousel} from '@/config/experienceCarousel'
import {skillCarousel} from '@/config/skillCarousel'


export default {
  name: '',
  components: {
    TopBar,
    About,
    Sidebar,
    GradientCard,
    Carousel,
    Card,
    Bordered,
    RoundedImage,
    CircularProgress,

  },
  props: {},
  data() {
    return {
      slides,
      responsive,
      certificateCarousel,
      experienceCarousel,
      skillCarousel
    }
  },
  computed: {
    certificates() {
      return certificates;
    },
    skills() {
      return skills;
    },
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>