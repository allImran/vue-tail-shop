<template>
  <div class="container mx-auto shadow-md rounded relative">
    <div class="pt-20 pb-10 bg-blue-600 rounded">
      <div class="ml-56">
        <p class="text-gray-100 text-base md:text-lg font-semibold">John Abraham</p>
        <p class="text-gray-100 text-sm md:text-base pb-4">Interior Designer at Sysbuild</p>
        <p class="text-gray-100 text-xs md:text-sm">Interior Designer, Interior Specialist, Architct</p>
      </div>
    </div>

    <div class="bg-white">
      <div class="h-48 w-48 p-1 bg-white shadow-md absolute ml-5 top-0 mt-16 rounded"></div>
      <div class="ml-0 sm:ml-56 flex justify-center sm:justify-between items-center py-3">

        <div class="flex">
          <button class="focus:outline-none px-1 sm:px-5 mr-2 text-white py-1 rounded bg-blue-600">dfdf</button>
          <button class="focus:outline-none px-1 sm:px-5 bg-gray-300 text-gray-700 py-1">fdfdfdf</button>
        </div>

        <a
            class="rounded-full hidden md:block py-1 px-1 sm:px-4 bg-blue-500 text-xs text-gray-100 capitalize mr-0 sm:mr-5"
            href="#">
          <span class="mdi mdi-printer"></span>
          download company profile
        </a>
      </div>

      <div class="flex justify-center py-3 md:hidden">
        <a
            class="rounded-full py-1 px-4 bg-blue-500 text-xs text-gray-100 capitalize mr-5"
            href="#">
          download company profile
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoAndDescription',
  components: {},
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