<template>
	<div class="container shadow-md mx-auto">
		<div class="grid grid-cols-2 gap-1">
			<div 
				style="background-image: url('/images/interior1.jpg');" 
				class="left h-48 rounded relative bg-center bg-cover bg-no-repeat">
				<RoundImage 
					class="absolute ml-10 custom-position"
				/>
			</div>
			<div 
				style="background-image: url('/images/interior2.png');" 
				class="left h-48 relative rounded bg-center bg-cover bg-no-repeat">
				<a
					class="rounded-full py-2 px-4 bg-blue-500 text-xs text-gray-100 capitalize absolute right-0 bottom-0 mb-5 mr-5"
					href="#"> <span class="mdi mdi-printer"></span> download company profile</a>
			</div>
		</div>
	</div>
</template>

<script>
	import RoundImage from '@/components/atom/RoundImage'
	export default{
		name: 'CoverDescription',
		components: {
			RoundImage
		}
	}
</script>

<style>
	.custom-position{
		bottom: -48px;
	}
</style>