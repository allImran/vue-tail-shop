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

    <CertificateCardView/>

    <ManagementTeam>
      <template v-slot:top>
        <p class="uppercase font-bold text-gray-700 mt-16 mb-8">Our Management</p>
      </template>
    </ManagementTeam>
  </div>
</template>

<script>
import TextWithBgImage from '@/components/atom/TextWithBgImage'
import CertificateCardView from '@/components/molecule/vendor/CertificateCardView'
import ManagementTeam from '@/components/molecule/vendor/ManagementTeam'

export default {
  name: 'AboutUs',
  components: {
    TextWithBgImage,
    CertificateCardView,
    ManagementTeam
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