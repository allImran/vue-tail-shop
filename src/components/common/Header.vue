<template>
	<div class="bg-white">
		<div class="container mx-auto py-3">
			<div class="flex">
				<div class="w-4/12 flex items-center justify-between">
					<div class="md:flex-shrink-0">
						<img class="md:w-40" src="/images/logo.jpg" alt="">
					</div>
					<button class="bg-gray-800 rounded text-white font-bold hover:bg-blue-600 focus:outline-none px-8 h-10">
					<span class="mdi mdi-menu"></span> All categories
					
					</button>
				</div>
				<div class="w-6/12 flex items-center justify-between md:px-3">
					<input placeholder="Search by text" 
					class="hover:bg-white border-solid border border-blue-400 rounded focus:border-blue-400 focus:outline-none w-full h-10 px-3" type="text">
				</div>
				<div class="w-4/12 flex items-center justify-between">
					<span class="mdi text-3xl mdi-drag"></span>
					<span class="mdi text-3xl mdi-cart"></span>
					<span class="mdi text-3xl mdi-view-list"></span>
					<span class="mdi text-3xl mdi-account-circle"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderComponent',
	}
</script>