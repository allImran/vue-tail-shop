<template>
	<div class="flex justify-between">
		<div class="flex border-b w-full">
			<button
				:class="`focus:outline-none text-sm tex-grey-700 mr-5 pb-1 ${ id == item.name ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`"
				@click="id = item.name"
				v-for="(item, index) in items"
				:key="index"
			>
				{{ item.name }}
			</button>
		</div>
		<div class="flex">
			<button @click="$emit('prev')" class="focus:outline-none">
				<span class="mdi mdi-chevron-left rounded-l border text-lg"></span>
			</button>
			<button @click="$emit('next')" class="focus:outline-none">
				<span class="mdi mdi-chevron-right rounded-r border text-lg"></span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		id: 'top-bar',
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