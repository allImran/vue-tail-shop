<template>
  <div class="container mx-auto mt-5 mb-5">
    <div class="grid grid-cols-3 gap-10 rounded">
      <div class="col-span-3 sm:col-span-2 bg-white shadow-md pt-4">
        <TopBar
            tabMargin="ml-5 uppercase font-semibold"
        />

        <About/>
        <Certificate/>
        <Experience/>

        <ProjectCardView cardPadding="px-5">
          <template v-slot:top>
            <div class="flex justify-between px-5 mt-5 mb-3 pr-3">
              <p class="uppercase text-gray-700 font-bold">some of our project</p>
              <router-link
                  to="#"
                  class="text-blue-500 capitalize"
              >
                view all
              </router-link>
            </div>
          </template>
        </ProjectCardView>

        <Education/>

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
import Certificate from '@/components/molecule/profile/Certificate'
import Experience from '@/components/molecule/profile/Experience'
import Education from '@/components/molecule/profile/Education'
import Sidebar from '@/components/molecule/profile/Sidebar'
import ProjectCardView from "@/components/molecule/project/ProjectCardView.vue";

export default {
  name: '',
  components: {
    TopBar,
    About,
    Sidebar,
    Certificate,
    Experience,
    Education,
    ProjectCardView,
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style>

</style>