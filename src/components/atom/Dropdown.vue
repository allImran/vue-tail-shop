<template>
	<div class="relative ml-2">
	<select
		class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
		id="grid-state">
		<option 
			v-for="(row, index) in filterMenus" 
			:key="index">{{ row.name }}
		</option>
	</select>
	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<path
		d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
		</svg>
	</div>
	</div>
</template>

<script>
  export default {
    name: '',
    components:{

    },
    props:{
	filterMenus: {
			required: true
		}
    },
    data(){
      return{

      }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    }
  }
</script>