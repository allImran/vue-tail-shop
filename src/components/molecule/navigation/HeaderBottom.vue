<template>
	<div class="pt-3">
	<div class="container mx-auto">
		<div class="flex justify-start flex-wrap">
			<router-link
				class="font-semibold text-sm hover:text-purple-800 pr-5 mb-3"
				v-for="n in 19"
				:key="n"
				to="/">{{ link() }}
			</router-link>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderBottom',
		data() {
			return {
				menus: ['Office Supplies', 'Cleaning', 'Solar', 'It & Electronic', 'Security', 'Office Supplies', 'Cleaning', 'Solar', 'It & Electronic', 'Security']
			}
		},
		methods: {
			link(){
				let num = Math.floor(Math.random() * 10);
				return this.menus[num]
			}
		}
	}
</script>