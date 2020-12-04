<template>
  <li class="font-semibold text-sm list-none block">
    <div class="flex items-center justify-between mb-2 cursor-pointer" @click="toggleShow">
      {{ title }}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="{'rotate-90' : showMenu}"
           class="dropdown-menu" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </div>

    <ul :class="menuHeight" class="ml-4 overflow-hidden dropdown-menu font-normal">
      <li v-for="(row,index) in items" :key="index">{{ row.title }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "MegaMenuTitle",
  props: {
    title: {
      default:'Main menu'
    },
    items:{
      type:Array
    }

  },
  data() {
    return {
      showMenu: false,
      lmn:'h-full'
    };
  },

  methods: {
    toggleShow() {
      this.showMenu = !this.showMenu;
    }
  },

  computed: {
    menuHeight() {
      return this.showMenu ? 'h-full' : "h-0";
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  transition: 300ms;
}

svg.rotate-90 {
  transform: rotate(90deg);
}
</style>