<template>
	<div class="flex">
		<div class="flex justify-end border-b w-full">
			<button
				:class="`focus:outline-none text-sm tex-grey-700 mr-5 pb-1 ${ id == item.name ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`"
				@click="id = item.name"
				v-for="(item, index) in items"
				:key="index"
			>
				{{ item.name }}
			</button>
		</div>

		<slot name="nav"></slot>
		<div class="flex">
			<!-- <button class="focus:outline-none"> -->

			<div class="flex">
				<button @click="$emit('prev')" class="focus:outline-none">

					<span class="mdi mdi-chevron-left rounded-l border text-lg"></span>
				</button>
				<button @click="$emit('next')" class="focus:outline-none">
					<span class="mdi mdi-chevron-right rounded-r border text-lg"></span>
				</button>
			</div>
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