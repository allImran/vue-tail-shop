<template>
  <div class="container mx-auto mt-5 mb-5">
    <div class="grid grid-cols-3 gap-10 rounded">
      <div class="col-span-3 sm:col-span-2 bg-white shadow-md pt-4">
        <TopBar
            tabMargin="ml-5 uppercase font-semibold"
        />

        <About/>


        <div class="px-3">
          <Carousel
            left-arrow-classes="group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            right-arrow-classes="group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            class="mt-10"
            :slides="skills" 
            :responsive="skillCarousel">
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <div class="flex flex-col items-center">
                  <p class="text-sm text-gray-700 mb-3">{{ slide.title }}</p>
                  <CircularProgress :percentage="slide.percentage"/>
                </div>
              </div>

            </template>

            <template v-slot:top>
                 <TextWithIcon
                  class="mt-2"
                  icon="mdi mdi-account"
                  iconStyle="text-gl text-blue-600"
                  text="skill"
                 textStyle="font-bold text-gl text-blue-600 my-2 capitalize"
                />
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

          <Carousel
            class="mt-10"
            :slides="slides"
            left-arrow-classes="group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            right-arrow-classes="group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            :responsive="responsive"
           >
            <template v-slot="{slide}">
              <GradientCard :image="slide.img"/>
            </template>

              <template v-slot:top>
                 <TextWithIcon
                  class="mt-2"
                  icon="mdi mdi-account"
                  iconStyle="text-gl text-blue-600"
                  text="project"
                 textStyle="font-bold text-gl text-blue-600 my-2 capitalize"
                />
            </template>
            </Carousel>

          <Carousel
            class="mt-10"
            left-arrow-classes="group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            right-arrow-classes="group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            :slides="certificates" 
            :responsive="certificateCarousel">
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
            <template v-slot:top>
                <TextWithIcon
                  class="mt-2"
                  text="Certification"
                  icon="mdi mdi-account"
                  iconStyle="text-gl text-blue-600"
                 textStyle="font-semibold text-lg text-blue-600 my-2 capitalize"
                />
          </template>
          </Carousel>

          <Carousel
            left-arrow-classes="group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            right-arrow-classes="group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            class="mt-10"
            :slides="slides" 
            :responsive="experienceCarousel"
          >
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <RoundedImage
                    :image="slide.img"
                    heightWeight="w-20 h-20"
                />
                <Bordered/>
              </div>
            </template>
            <template v-slot:top>
             <TextWithIcon
                class="mt-2"
                icon="mdi mdi-account"
                iconStyle="text-gl text-blue-600"
                text="Experience"
                textStyle="font-semibold text-lg text-blue-600 my-2 capitalize"
            />
            </template>
          </Carousel>

          <Carousel
            left-arrow-classes="group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            right-arrow-classes="group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer"
            class="mt-10"
            :slides="slides" 
            :responsive="experienceCarousel"
          >
            <template v-slot="{slide}">

              <div class="mr-5 mb-4">
                <RoundedImage
                    :image="slide.img"
                    heightWeight="w-20 h-20"
                />
                <Bordered/>
              </div>
            </template>
            <template v-slot:top>
             <TextWithIcon
                class="mt-2"
                icon="mdi mdi-account"
                  iconStyle="text-gl text-blue-600"
                text="education"
                textStyle="font-semibold text-lg text-blue-600 my-2 capitalize"
                />
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
import TextWithIcon from "@/components/atom/TextWithIcon"


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
    TextWithIcon
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