<template>
	<div class="bg-white py-2">
		<div class="flex justify-end">
			<router-link
				v-for="(item, index) in menus"
				:key="index"
				to="#"
				class=" border-r px-2 hover:text-blue-400"
			>
				<span :class="[item.icon, 'mdi', item.color, 'mr-1']"></span>
				{{ item.name }}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FooterTop',
		data() {
			return {
				menus: [
					{
						name: 'Office Supplies',
						icon: 'mdi-briefcase-variant-outline',
						color: 'text-red-400'
					},{
						name: 'Cleaning',
						icon: 'mdi-rocket-launch',
						color: 'text-blue-700'
					},{
						name: 'Solar',
						icon: 'mdi-weight',
						color: 'text-black-500'
					},{
						name: 'It & Electronic',
						icon: 'mdi-webrtc',
						color: 'text-green-700'
					},{
						name: 'Cleaning',
						icon: 'mdi-rice',
						color: 'text-purple-800'
					},
				]
			}
			
		}
	}
</script>