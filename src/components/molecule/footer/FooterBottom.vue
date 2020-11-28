<template>
	<div class="bg-white">
		<div class="container mx-auto py-10">
			<div class="grid grid-cols-6 gap-3">

        <div class="col-span-6 md:hidden sm:block">
          <div class="flex">

            <div class="w-1/2 h-32 flex items-center">
              <img src="/images/logo.png" alt="">
            </div>

            <div class="w-1/2">

              <TextWithIcon
                  icon="mdi mdi-google-maps"
                  iconStyle="text-gray-600 text-2xl"
                  text="house 1 road 16 block c, Central Building kafrul, dhaka 1216"
                  textStyle="capitalize text-gray-700 text-xs sm:text-sm"
              />

              <TextWithIcon
                  icon="mdi mdi-headset"
                  iconStyle="text-gray-600 text-2xl"
                  text="+880 902 6599, +880 152136358"
                  textStyle="text-gray-700 text-xs sm:text-sm"
              />

              <TextWithIcon
                  icon="mdi mdi-email-outline"
                  iconStyle="text-gray-600 text-2xl"
                  text="contact@sysbuild.org"
                  textStyle="text-gray-700 text-xs sm:text-sm"
              />

              <TextWithIcon
                  icon="mdi mdi-clock"
                  iconStyle="text-gray-600 text-2xl"
                  text="open sat-thu (10.00 PM - 5PM)"
                  textStyle="capitalize text-gray-700 text-xs sm:text-sm"
              />

            </div>

          </div>
        </div>


				<div class="col-span-2 hidden md:block">
					<img class="w-48 pb-5" src="/images/logo.png" alt="">

          <TextWithIcon
						icon="mdi mdi-google-maps"
						iconStyle="text-gray-600 text-2xl"
						text="house 1 road 16 block c, Central Building kafrul, dhaka 1216"
						textStyle="capitalize text-gray-700 text-md"
					/>

          <TextWithIcon
						icon="mdi mdi-headset"
						iconStyle="text-gray-600 text-2xl"
						text="+880 902 6599, +880 152136358"
						textStyle="text-gray-700 text-md"
					/>

          <TextWithIcon
						icon="mdi mdi-email-outline"
						iconStyle="text-gray-600 text-2xl"
						text="contact@sysbuild.org"
						textStyle="text-gray-700 text-md"
					/>

          <TextWithIcon
						icon="mdi mdi-clock"
						iconStyle="text-gray-600 text-2xl"
						text="open sat-thu (10.00 PM - 5PM)"
						textStyle="capitalize text-gray-700 text-md"
					/>
				</div>

				<div v-for="i in 4" :key='i' class="hidden md:block">
					<BorderedTitle
						class="mb-5"
					/>

					<ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="FAQs"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

          <ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Affiliates"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

          <ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Specs"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

          <ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Custom Link"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

          <ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Gift Offers"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

          <ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Support"
						textStyle="text-gray-700 text-sm ml-2 hover:text-blue-400"
					/>

				</div>
				
			</div>


			
		</div>
	</div>
</template>
<script>
	import TextWithIcon from '@/components/atom/TextWithIcon'
	import ClickbleItem from '@/components/atom/ClickbleItem'
	import BorderedTitle from '@/components/atom/BorderedTitle'
	export default{
		name: 'FooterBottom',
		components: {
			TextWithIcon,
			BorderedTitle,
			ClickbleItem
		}
	}
</script>