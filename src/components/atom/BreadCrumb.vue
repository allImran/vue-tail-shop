<template>
	<div class="flex">
		<router-link 
			class="text-sm text-gray-600" 
			to="#"
		>
		Home
		</router-link>
		<span class="mx-1 text-gray-600 mdi mdi-chevron-right"></span>
		<router-link
			class="text-sm text-blue-600"
			to="#">
			Household
		</router-link>
	</div>
</template>

<script>
export default {
name: 'Breadcrumb',
components:{

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