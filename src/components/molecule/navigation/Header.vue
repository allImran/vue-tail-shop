<template>
	<div class="bg-white">
		<div class="container mx-auto py-3">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
				<div class="flex justify-between">
					<div class="md:flex-shrink-0">
						<img src="/images/logo.png" alt="">
					</div>
					<button 
						class="bg-gray-800 rounded text-lg text-white uppercase hover:bg-blue-600 focus:outline-none px-4 py-2">
						<span class="mdi mdi-menu pr-3"></span> <span class="text-sm font-semibold">All categories</span>
					</button>
				</div>
				<div class="flex md:col-span-2 lg:col-auto">
					<div class=" flex w-full border-solid border border-blue-400 rounded p-1">
						<input placeholder="Search by text" 
						class="hover:bg-white focus:border-blue-400 focus:outline-none w-full px-3" type="text">
						<span class="mdi text-3xl mdi-magnify bg-blue-400 rounded " style="color: #fff; padding: 4px"></span>
					</div>
				</div>
				<div class="sm:col-span-3 lg:col-auto">
					<div class="flex justify-between">
						<router-link class="flex items-center text-gray-700" to="#">
							<img width="30" src="/images/icons/circled_menu.svg" alt="">
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