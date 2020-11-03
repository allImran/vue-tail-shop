<template>
	<div class="rounded w-full pt-3">
		<div class="relative h-56 sm:h-64 md:h-32 lg:h-48">
			<img src="/images/p1.png" class="" alt="">
			<button class="product-cart focus:outline-none rounded-r-full absolute left-0 pl-6 pr-2 hover:bg-blue-700 py-1 bg-blue-500">
				<span class="mdi mdi-cart text-gray-100"></span>
			</button>
		</div>
	</div>
	<p class="font-medium text-xs text-gray-800">Lorem ipsum dolo consectetur adipisici explicabo!</p>
	<p class="text-gray-700 text-xs">
		<span class="text-gray-600">Vendor: </span>
		Baba Jamburi
	</p>
</template>

<script>
	export default{
		name: 'ProductCard',
	}
</script>

<style>
	.product-cart{
		bottom: 35px;
	}
</style>