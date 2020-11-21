<template>
	<div class="container bg-white mb-5 shadow-md pb-10 mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-1">

      <!--for xs device-->
      <div
          style="background-image: url('/images/interior2.png');"
          class="left h-48 relative rounded bg-center bg-cover bg-no-repeat sm:hidden">
        <a
            class="rounded-full py-2 px-4 bg-blue-500 text-xs text-gray-100 capitalize absolute right-0 bottom-0 mb-5 mr-10"
            href="#">
          <span class="mdi mdi-printer"></span>
          download company profile
        </a>
      </div>
      <!--for xs device-->

			<div 
				style="background-image: url('/images/interior1.jpg');" 
				class="left h-48 rounded relative bg-center bg-cover bg-no-repeat">
				<RoundImage 
					class="absolute ml-10 custom-position"
				/>
			</div>

			<div 
				style="background-image: url('/images/interior2.png');" 
				class="left h-48 relative rounded bg-center bg-cover bg-no-repeat hidden sm:block">
				<a
					class="rounded-full py-2 px-4 bg-blue-500 text-xs text-gray-100 capitalize absolute right-0 bottom-0 mb-5 mr-10"
					href="#"> 
					<span class="mdi mdi-printer"></span> 
					download company profile
				</a>
			</div>

		</div>

		<div class="w-full">
			<SocialBox 
				:links="links"
				text="follow on"
				flexPosition="justify-end"
			/>
		</div>

		<div class="grid grid-cols-10 gap-4 px-10">
			<div class="mt-5 md:col-span-3 col-span-10 pr-10">
				<p class="text-2xl text-gray-700 font-bold capitalize">Liva solution ltd.</p>
				<p class="text-md font-semibold text-gray-700 mb-5">Brick, Tiles and Ciramic Materials</p>
				<TextWithIcon
					icon="mdi mdi-google-maps"
					iconStyle="text-blue-300 text-md"
					text="Lorem ipsum dolor siectetur adipisicin"
					textStyle="text-gray-700 text-md"
				/>
				<TextWithIcon
					icon="mdi mdi-phone"
					iconStyle="text-blue-300 text-md"
					text="+990227 44488"
					textStyle="text-gray-700 text-md"
				/>
				<TextWithIcon
					icon="mdi mdi-email-outline"
					iconStyle="text-blue-300 text-md"
					text="support@domain.com"
					textStyle="text-gray-700 text-md"
				/>
			</div>

			<div class="md:col-span-7 col-span-10 md:border-l md:pl-10 sm:pl-0">
				<p class="text-xl font-bold text-gray-700 mb-2">About</p>
				<p class="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi voluptatem illo, unde earum quos. Soluta in aperiam quidem facilis, adipisci, enim eius optio ipsa, minima simil dipisci, enim eius optio ipsa, minima simil dipisci, enim eius optio ipsa, minima similique aliquid est doloremque earum, architecto ur? Aperiam itaque aliquid adipisci. Omnis consequuntur sed aut in magni perferendis laborum quod ab illo ipsam quae nisi rerum, mollitia nihil, sunt non ratione repellendus voluptate blanditiis dolorum voluptates temporibus enim tempora, magnam! Dolorem quas sit modi officia fugit adipisci ipsa consectetur illo animi, laudantium totam, recusandae qui voluptatibus. Aspernatur non aut voluptatem sit, commodi laboriosam unde libero suscipit asperiores, eveniet, odio magnam impedit, at. Quaerat, explicabo, veniam?</p>
			</div>
		</div>
	</div>
</template>

<script>
	import RoundImage from '@/components/atom/RoundImage'
	import SocialBox from '@/components/atom/SocialBox'
	import { links } from "@/data/products"
	import TextWithIcon from '@/components/atom/TextWithIcon'
	export default{
		name: 'CoverDescription',
		components: {
			RoundImage,
			SocialBox,
			TextWithIcon
		},
		computed: {
			links() {
				return links
			}
		}
	}
</script>

<style>
	.custom-position{
		bottom: -48px;
	}
</style>