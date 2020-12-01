<template>
  <div class="relative right-arrow">
    <div class="w-full bg-indigo-200 p-4">
      <div class="container flex-wrap flex mx-auto">
        <div class="w-full flex items-center">
          <div class="flex w-full p-2 items-center">

            <input
                placeholder="Search product by title, brand, materials, supplies, category, etc..."
                class="hover:bg-white border-solid border border-blue-400 focus:border-blue-400 focus:outline-none w-full h-10 px-3" type="text">
            <button
                class="bg-blue-700 text-white font-bold hover:bg-blue-800 focus:outline-none px-3 h-10 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SearchBox",
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>