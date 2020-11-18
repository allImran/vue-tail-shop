<template>
  <div class="flex bg-blue-500 items-center px-5 py-2 mb-3 justify-between">

    <span class="item-center">
    <span class="mdi mdi-chair-rolling text-3xl mr-2 text-gray-100"></span>
		<span class="uppercase text-sm font-semibold text-gray-100">Some Menu</span>
    </span>
    
    <div class="relative md:hidden sm:block">
      <select
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state">
        <option v-for="(row, index) in items_two" :key="index">{{ row.name }}</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>


  </div>

  <div class="sm:flex sm:flex-wrap md:flex-col">
    <button
        v-for="(item, index) in items"
        :key="index"
        @click="id = item.name"
        :class="`flex px-5 py-1 items-center focus:outline-none hover:text-blue-500 text-gray-700 ${id == item.name ? 'text-blue-500 md:border-l-4 border-blue-500 bg-white rounded sm:border-l-0' : ''}`"
    >
      <span :class="`${item.icon} text-xl mr-2`"></span>
      <span class="text-sm font-semibold">{{ item.name }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideNavbar',
  data() {
    return {
      id: 'Asdipscing',
      items: [
        {
          name: 'Asdipscing',
          icon: 'mdi mdi-account-multiple'
        }, {
          name: 'kStosol',
          icon: 'mdi mdi-flash-circle'
        }, {
          name: 'Slar',
          icon: 'mdi mdi-flask'
        }, {
          name: 'Ametload',
          icon: 'mdi mdi-microphone'
        }, {
          name: 'Meroudd',
          icon: 'mdi mdi-adjust'
        }, {
          name: 'Damosakiklu',
          icon: 'mdi mdi-mine'
        }, {
          name: 'Electroappl',
          icon: 'mdi mdi-monitor'
        }, {
          name: 'Archlotia',
          icon: 'mdi mdi-arch'
        }, {
          name: 'Fun & Lol',
          icon: 'mdi mdi-gamepad-down'
        }, {
          name: 'Asbiasun',
          icon: 'mdi mdi-pac-man'
        }
      ],
      items_two: [
        {
          name: 'Popular',
        }, {
          name: 'New Arrival',
        }, {
          name: 'Featured',
        },
      ]
    }
  }
}
</script>

<style>
/* This is responseive design

  about page responsiveness
*/
</style>