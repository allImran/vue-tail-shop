<template>
	<div>
    <p class="font-semibold text-sm text-gray-800 capitalize">freelance interior designer</p>
    <p class="font-semibold text-sm text-gray-600 capitalize">Js Developer LTD.</p>
    <BorderedTitle
      title="2009-2007"
      titleStyle="text-xs text-gray-500"
    />
  </div>
</template>

<script>
  import BorderedTitle from '@/components/atom/BorderedTitle'
  export default {
    name: 'Bordered',
    components:{
      BorderedTitle
    },
    props:{

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

<style>
  
</style>