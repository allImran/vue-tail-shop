<template>
	<div class="flex bg-blue-500 items-center px-5 py-2 mb-3">
		<span class="mdi mdi-chair-rolling text-3xl mr-2 text-gray-100"></span>
		<span class="uppercase text-sm font-semibold text-gray-100">Some Menu</span>
	</div>

	<div class="">
		<button
			v-for="(item, index) in items"
			:key="index"
			@click="id = item.name"
			:class="`flex px-5 py-1 items-center w-full focus:outline-none hover:text-blue-500 text-gray-700 ${id == item.name ? 'text-blue-500 border-l-4 border-blue-500 bg-white rounded' : ''}`"
		>
			<span :class="`${item.icon} text-xl mr-2`"></span>
			<span class="text-sm font-semibold">{{ item.name }}</span>
		</button>
	</div>
</template>

<script>
	export default{
		name: 'SideNavbar',
		data() {
			return {
				id: 'Asdipscing',
				items: [
					{
						name: 'Asdipscing',
						icon:'mdi mdi-account-multiple'
					},{
						name: 'kStosol',
						icon:'mdi mdi-flash-circle'
					},{
						name: 'Slar',
						icon:'mdi mdi-flask'
					},{
						name: 'Ametload',
						icon:'mdi mdi-microphone'
					},{
						name: 'Meroudd',
						icon:'mdi mdi-adjust'
					},{
						name: 'Damosakiklu',
						icon:'mdi mdi-mine'
					},{
						name: 'Electroappl',
						icon:'mdi mdi-monitor'
					},{
						name: 'Archlotia',
						icon:'mdi mdi-arch'
					},{
						name: 'Fun & Lol',
						icon:'mdi mdi-gamepad-down'
					},{
						name: 'Asbiasun',
						icon:'mdi mdi-pac-man'
					}
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