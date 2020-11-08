<template>
	<div class="flex">
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
	export default{
		name: 'NextPrev',
	}
</script>