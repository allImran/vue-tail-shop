<template>
	<div class="bg-white">
		<div class="container mx-auto py-3">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-6 gap-3">
				<div class="col-span-2">
					<router-link to="/">
						<img class="inline-block" src="/images/logo.png" alt="">
					</router-link>
					<button 
						class="bg-gray-800 w-42 rounded text-lg text-white uppercase hover:bg-blue-600 focus:outline-none px-4 py-2">
						<span class="mdi mdi-menu pr-3"></span> <span class="text-sm font-semibold">All categories</span>
					</button>
				</div>
				<div class="col-span-3">
					<div class="flex items-start w-full border-solid border border-blue-400 rounded relative" style="padding: 8px">
						<input placeholder="Search product by title, brand, materials, supplies, category, etc..." 
						class="hover:bg-white focus:border-blue-400 focus:outline-none w-full" type="text">
						<span class="mdi text-xl mdi-magnify bg-blue-400 rounded absolute cursor-pointer" style="color: #fff; padding: 1px 4px; top: 3px; right: 3px"></span>
					</div>
				</div>
				<div class="col-span-1">
					<div class="flex justify-between">
						<router-link class="flex items-center text-gray-700" to="#">
							<img width="30" src="/images/icons/circled_menu.svg" alt="">
						</router-link> 
						<router-link class="flex w-10 items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-cart"></span>
							<span class="text-xs">Place Req</span>
						</router-link> 
						<router-link class="flex w-10 items-center text-gray-700" to="#">
							<span class="mdi text-3xl mdi-view-list"></span>
							<span class="text-xs">Rep List</span>
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