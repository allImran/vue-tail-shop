<template>
	<div class="bg-white">
		<div class="container mx-auto py-3">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
				<div class="flex justify-between px-2">
					<div class="md:flex-shrink-0">
						<img class="md:w-40" src="/images/logo.jpg" alt="">
					</div>
					<button 
						class="bg-gray-800 rounded sm:text-xs text-white font-bold hover:bg-blue-600 focus:outline-none px-1 h-10">
						<span class="mdi mdi-menu"></span> All categories
					</button>
				</div>
				<div class="px-2 md:col-span-2 lg:col-auto">
					<input placeholder="Search by text" 
					class="hover:bg-white border-solid border border-blue-400 rounded focus:border-blue-400 focus:outline-none w-full h-10 px-3" type="text">
				</div>
				<div class="px-2 sm:col-span-3 lg:col-auto">
					<div class="flex justify-between">
						<router-link class="flex items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-drag"></span>
						</router-link> 
						<router-link class="flex items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-cart"></span>
							<span>Place Req</span>
						</router-link> 
						<router-link class="flex items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-view-list"></span>
							<span>Rep List</span>
						</router-link> 
						<router-link class="flex items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-account-circle"></span>
							<span>Login</span>
						</router-link> 
					</div>
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