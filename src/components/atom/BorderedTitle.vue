<template>
	<p :class="`borderedTitle ${titleStyle}`">{{title}}</p>
</template>
<script>
	export default{
		name: 'BorderedTitle',
		props: {
			title: {
				default: 'This is a Title'
			},
			titleStyle: {
				default: 'text-md font-semibold uppercase text-gray-600'
			}
		}
	}
</script>

<style>
	.borderedTitle::after{
		height: 3px;
		display: block;
		width: 70px;
		background: #3572ee;
		border-right: 1px white;
		margin-top: 3px;
		content: '';
	}
</style>