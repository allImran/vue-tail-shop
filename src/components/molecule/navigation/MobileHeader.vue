<template>
  <div style="background-color: #183B78;">

    <div class="container mx-auto">
      <div class="grid grid-cols-10 gap-1 text-center">

        <div class="col-span-1 sm:col-span-1 py-2 border-r-2 border-black cursor-pointer" @click="toogle = !toogle">
          <span class="mdi mdi-menu text-white text-3xl"></span>
        </div>

        <div class="col-span-5 sm:col-span-3 py-2 border-r-2 border-black">
          <div class="flex items-center">
            <router-link to="/">
              <img  src="/images/logo.png" alt="">
            </router-link>
          </div>

        </div>

        <div class="col-span-2 sm:col-span-1 py-2 border-r-2 border-black">
          <span class="mdi mdi-magnify text-3xl text-white"></span>
        </div>

        <div class="col-span-2 sm:col-span-1 py-2 cursor-pointer" @click="open = !open">
          <span class="mdi mdi-apps text-3xl text-white"></span>
        </div>

        <div class="col-span-1 sm:col-span-1"></div>

        <div class="col-span-2 sm:col-span-1 py-2 border-r-2 border-black">
          <router-link class="flex items-center text-white" to="#">
            <span class="mdi text-3xl mdi-cart"></span>
            <span style="font-size: 10px;">Place Req</span>
          </router-link>
        </div>

        <div class="col-span-2 sm:col-span-1 py-2 border-r-2 border-black">
          <router-link class="flex w-10 items-center text-white" to="#">
            <span class="mdi text-3xl mdi-view-list"></span>
            <span style="font-size: 10px;">Rep List</span>
          </router-link>
        </div>

        <div class="col-span-2 sm:col-span-1 py-2">
          <router-link class="flex items-center text-white" to="/profile">
            <span class="mdi text-3xl mdi-account-circle"></span>
            <i class="mdi mdi-arrow-down-bold"></i>

          </router-link>
        </div>

      </div>

      <transition name="slide">
        <div v-show="toogle" class="absolute x-10 inset-x-0 transform shadow-lg" style="top: 100px">
          <MegaMenu />
        </div>
      </transition>

      <transition name="slide">
        <div class="flex justify-center">
          <OtherAppMenu   v-show="open" />
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import MegaMenu from "@/components/molecule/navigation/MegaMenu"
import OtherAppMenu from "@/components/molecule/navigation/OtherAppMenu"
export default {
  name: 'MobileHeader',
  components: {
    MegaMenu,
    OtherAppMenu
  },
  data() {
    return {
      toogle: false,
      open: false
    }
  }
}
</script>


<style>


</style>