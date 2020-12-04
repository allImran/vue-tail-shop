<template>
  <div style="background-color: #183B78;">

    <div class="container mx-auto">
      <div class="grid grid-cols-10 gap-1 text-center">

        <div class="col-span-1 sm:col-span-1 py-2 border-r-2 border-gray-800 cursor-pointer" @click="toogle = !toogle">
          <span v-if="!toogle" class="mdi mdi-menu text-white text-md sm:text-3xl"></span>
          <span v-else class="mdi mdi-close text-white text-md sm:text-3xl"></span>
        </div>

        <div class="col-span-3 sm:col-span-3 py-2 border-r-2 border-gray-800">
          <div class="flex items-center">
            <router-link to="/">
              <img class="w-4/5 sm:w-full" src="/images/logo.png" alt="">
            </router-link>
          </div>

        </div>

        <div class="col-span-1 sm:col-span-1 py-2 border-r-2 border-gray-800 cursor-pointer" @click="searchToogle = !searchToogle">
          <span class="mdi mdi-magnify text-md sm:text-3xl text-white"></span>
        </div>

        <div class="col-span-1 sm:col-span-1"></div>

        <div class="col-span-1 sm:col-span-1 py-2 cursor-pointer border-r-2 border-gray-800" @click="open = !open">
          <span class="mdi mdi-apps text-md sm:text-3xl text-white"></span>
        </div>

        <div class="col-span-1 sm:col-span-1 py-2 border-r-2 border-gray-800">
          <router-link class="flex items-center text-white" to="#">
            <span class="mdi text-md sm:text-3xl mdi-cart"></span>
            <span style="font-size: 10px;">Place Req</span>
          </router-link>
        </div>

        <div class="col-span-1 sm:col-span-1 py-2 border-r-2 border-gray-800">
          <router-link class="flex w-10 items-center text-white" to="#">
            <span class="mdi text-md sm:text-3xl mdi-view-list"></span>
            <span style="font-size: 10px;">Rep List</span>
          </router-link>
        </div>

        <div class="col-span-1 sm:col-span-1 py-2 flex items-center text-white cursor-pointer" @click="mobileProfile = !mobileProfile">

<!--          <router-link class="flex items-center text-white" to="/profile" >-->
            <span class="mdi text-md sm:text-3xl mdi-account-circle"></span>
            <i class="mdi mdi-arrow-down-bold"></i>
<!--          </router-link>-->

        </div>

      </div>

      <transition name="mobileSlide">
        <div v-show="toogle" class="absolute x-10 inset-x-0 transform  z-10 mega-menu-top">
          <MegaMenu/>
        </div>
      </transition>

      <transition name="slide">
        <div class="flex justify-center">
          <OtherAppMenu v-show="open" class="z-10"/>
        </div>
      </transition>

      <transition name="mobileSearch">
        <div v-show="searchToogle" class="absolute x-10 inset-x-0 transform  z-10 mega-menu-top">
          <SearchBox/>
        </div>
      </transition>

      <transition name="mobileProfile">
        <div class="flex justify-end">
          <MobileProfile v-show="mobileProfile" class="z-10"/>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import MegaMenu from "@/components/atom/mobileMenu/MegaMenu"
import OtherAppMenu from "@/components/molecule/navigation/OtherAppMenu"
import SearchBox from "@/components/atom/mobileMenu/SearchBox"
import MobileProfile from "@/components/atom/mobileMenu/MobileProfile"

export default {
  name: 'MobileHeader',
  components: {
    MegaMenu,
    OtherAppMenu,
    SearchBox,
    MobileProfile
  },
  data() {
    return {
      toogle: false,
      open: false,
      searchToogle: false,
      mobileProfile: false,
    }
  },

}
</script>


<style scoped>
@media (min-width: 650px) and (max-width: 767px){
  .mega-menu-top
  {
    top:88px;
  }

}

@media (min-width: 450px) and (max-width: 649px) {
  .mega-menu-top
  {
    top:72px;
  }
}
</style>