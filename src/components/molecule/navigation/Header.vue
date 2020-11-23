<template>
  <div class="bg-white">
    <div class="container mx-auto py-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 xl:grid-cols-12 gap-1">

        <div class="col-span-4 sm:text-center">
          <img class="inline-block md:w-2/4" src="/images/logo.png" alt="">
          <button
              class="bg-gray-800 ml-4 w-41 rounded text-lg text-white uppercase hover:bg-blue-600 focus:outline-none py-2 xl:px-4 md:px-2">
            <span class="mdi mdi-menu xl:pr-3"></span> <span class="text-sm font-semibold xl:text-sm md:text-xs">All categories</span>
          </button>
        </div>

        <div class="col-span-5 md:col-span-4 xl:col-span-5 md:mt-1 xl:mt-1">
          <div class="flex items-start w-full border-solid border border-blue-400 rounded relative md:ml-5 xl:ml-5"
               style="padding: 8px">
            <input placeholder="Search product by title, brand, materials, supplies, category, etc..."
                   class="hover:bg-white focus:border-blue-400 focus:outline-none w-full" type="text">
            <span class="mdi text-xl mdi-magnify bg-blue-400 rounded absolute cursor-pointer"
                  style="color: #fff; padding: 1px 4px; top: 3px; right: 4px"></span>
          </div>
        </div>

        <div class="col-span-3 md:ml-4 xl:mt-1">
          <div class="flex justify-between">
            <router-link class="flex items-center text-gray-700" to="#">
              <img width="30" src="/images/icons/circled_menu.svg" alt="">
            </router-link>

            <router-link class="flex w-10 items-center text-gray-700 " to="#">
              <span class="mdi text-3xl mdi-cart"></span>
              <span class="text-xs">Place Req</span>
            </router-link>

            <router-link class="flex w-10 items-center text-gray-700" to="#">
              <span class="mdi text-3xl mdi-view-list"></span>
              <span class="text-xs">Rep List</span>
            </router-link>

            <router-link class="flex items-center text-gray-700 xl:mr-5" to="/profile">
              <span class="mdi text-3xl mdi-account-circle"></span>
              <span>Login</span>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>