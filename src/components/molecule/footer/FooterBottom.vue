<template>
	<div class="bg-white">
		<div class="container mx-auto py-10">
			<div class="grid grid-cols-6 gap-3">

        <div class="col-span-6 md:hidden sm:block">
          <div class="flex">

            <div class="w-1/2">
              <img src="/images/logo.png" alt="">
            </div>

            <div class="w-1/2">

              <TextWithIcon
                  icon="mdi mdi-phone"
                  iconStyle="text-gray-600 text-2xl"
                  text="+990227 44488"
                  textStyle="text-gray-700 text-md"
              />

              <TextWithIcon
                  icon="mdi mdi-message"
                  iconStyle="text-gray-600 text-2xl"
                  text="support@domain.com"
                  textStyle="text-gray-700 text-md"
              />

              <TextWithIcon
                  icon="mdi mdi-google-maps"
                  iconStyle="text-gray-600 text-2xl"
                  text="Lorem ipsum dolor siectetur adipisicin"
                  textStyle="text-gray-700 text-md"
              />



            </div>

          </div>
        </div>


				<div class="col-span-2 hidden md:block">
					<img class="w-48 pb-5" src="/images/logo.png" alt="">

          <TextWithIcon
						icon="mdi mdi-google-maps"
						iconStyle="text-gray-600 text-2xl"
						text="Lorem ipsum dolor siectetur adipisicin"
						textStyle="text-gray-700 text-md"
					/>

          <TextWithIcon
						icon="mdi mdi-phone"
						iconStyle="text-gray-600 text-2xl"
						text="+990227 44488"
						textStyle="text-gray-700 text-md"
					/>

          <TextWithIcon
						icon="mdi mdi-email-outline"
						iconStyle="text-gray-600 text-2xl"
						text="support@domain.com"
						textStyle="text-gray-700 text-md"
					/>
				</div>

				<div v-for="i in 4" :key='i' class="hidden md:block">
					<BorderedTitle
						class="mb-5"
					/>
					<ClickbleItem
						icon="mdi mdi-moon-full"
						iconStyle="text-gray-600 text-xs"
						text="Anything"
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