<template>
	<div class="product-card">
		<div class="product-card__image-area" style="background-image: url('/images/p1.png')">
			
			<div class="product-card__cart-icon simptip-position-bottom simptip-fade" data-tooltip="I'm a tooltip with fade effect">
				<span class="mdi mdi-cart text-gray-100"></span>
				<!-- <span class="product-card__hints">Place requirement</span> -->
			</div>
			<div class="product-card__brand-name">
				#partext ltd
			</div>
		</div>
		<p class="font-medium text-xs text-gray-800"> {{ id }} Lorem ipsum dolo consectetur adipisici explicabo!</p>
		<p class="text-gray-700 text-xs">
			<span class="text-gray-600">Vendor: </span>
			Baba Jamburi
		</p>
	</div>
</template>

<script>
	export default{
		name: 'ProductCard',
		props: {
			id: {
				type: Number
			}
		}
	}
</script>

<style scoped>
	.product-card {
		cursor: pointer;
	}
	.product-card:hover .product-card__brand-name {
		bottom: 0;
	}
	.product-card__image-area {
		width: 100%;
		height: 156px;
		overflow: hidden;
		position: relative;
		border-radius: 5px;
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.product-card__cart-icon {
		position: absolute;
		left: 0px;
		z-index: 1;
		bottom: 24px;
		height: 30px;
		display: flex;
		color: #fff;
		min-width: 45px;
		transition: .3s;
		overflow: hidden;
		align-items: center;
		transition: .3s left;
		background: #3572ee;
		flex-direction: column;
		justify-content: center;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
	}
	.product-card__brand-name {
		left: 0;
		width: 100%;
		color: #fff;
		bottom: -100px;
		text-align: right;
		padding: 2px 10px;
		position: absolute;
		transition-delay: .2s;
		transition: .3s bottom;
		background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,0,0,1));
	}
</style>