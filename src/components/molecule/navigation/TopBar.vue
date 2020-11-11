<template>
	<div class="flex w-full">
		<div :class="`flex ${tabPosition} border-b h-8 w-full`">
			<button
				:class="`focus:outline-none text-sm tex-grey-700 ${tabMargin} ${ id == item.name ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`"
				@click="id = item.name"
				v-for="(item, index) in items"
				:key="index"
			>
				{{ item.name }}
			</button>
		</div>

		<slot name="nav"></slot>
		
	</div>
</template>

<script>
	export default {
		id: 'top-bar',
		name: 'TopBar',
		props: {
			tabPosition: String,
			tabMargin: {default: 'mr-5'}
		},
		data () {
			return {
				id: 'Popular',
				items: [
					{
						name: 'Popular',
					},{
						name: 'New Arrival',
					},{
						name: 'Featured',
					},
				]
			}
		}
	}
</script>