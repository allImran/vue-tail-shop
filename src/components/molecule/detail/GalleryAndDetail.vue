<template>
    <div class="bg-white py-3 border-b">
        <div class="container mx-auto">
            <BreadCrumb />
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-8">
                    <div class="grid grid-cols-11 gap-5">
                        <div class="col-span-5">
                            <Gallery />
                            <Availability class="mt-5"/>
                        </div>
                        <div class="col-span-6 px-5">
                            <p class="capitalize text-2xl font-semibold">interior design full package</p>

                            <div class="flex items-center">
                                <PriceBox />
                                <StarBox />
                                <p class="text-gray-500 pl-3">20 Reviews</p>
                            </div>

                            <div class="border-t mt-5 py-3">
                                <p class="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat esse est quisquam, earum veniam laboriosam culpa deleniti temporibus dignissimos soluta quo corrupti illum adipisci itaque rerum doloribus cupiditate officia.</p>

                                <TextWithIcon
                                    v-for="(n, i) in 3"
                                    :key="i"
                                    text="100% polyster"
                                    textStyle="text-sm text-gray-500 mb-1 ml-3 italic"
                                    icon="mdi mdi-record"
                                    iconStyle="text-blue-500 text-xs"
                                />
                            </div>

                            <SizeBox />

                            <div class="flex items-center border border-gray-300 p-3 mt-10">
                                <IncrementBox />
                                <button class="text-gray-100 rounded focus:outline-none bg-blue-600 px-2 py-2">
                                    Place Requirement
                                </button>

                                <span class="mdi mdi-heart ml-5 text-gray-600 text-3xl"></span>
                                <span class="text-gray-500 mx-3">|</span>
                                <span class="mdi mdi-share text-gray-600 text-3xl"></span>
                            </div>

                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-1 mt-3">
                        <TextWithBgImage title="."/>
                        <TextWithBgImage title="."/>
                    </div>  
                </div>
                <div class="col-span-2">
                    <div class="border border-gray-300 py-5 px-3">
                        <p class="text-sm text-gray-600 font-semibold">Vendor</p>
                        <p class="text-blue-500 text-lg font-bold">SYS Interior BD.</p>
                        <p class="text-sm text-gray-600 mt-5 font-semibold">Items</p>
                        <p class="text-sm text-gray-600">Bricks, Tiles And other</p>

                        <p class="text-sm text-gray-600 mt-5 font-semibold mb-2">Contact</p>
                        <TextWithIcon
                            text="+880935 558 8584"
                            textStyle="text-sm text-gray-500 mb-1 ml-1"
                            icon="mdi mdi-email"
                            iconStyle="text-blue-500 text-md"
                        />
                        <TextWithIcon
                            text="email@example.com"
                            textStyle="text-sm text-gray-500 mb-1 ml-1"
                            icon="mdi mdi-phone"
                            iconStyle="text-blue-500 text-md"
                        />
                        <TextWithIcon
                            text="12/2 Block C, Mirpur-12, Dhaka"
                            textStyle="text-sm text-blue-500 mb-1 ml-1"
                            icon="mdi mdi-phone"
                            iconStyle="text-blue-500 text-md"
                        />

                        <div class="mt-10">
                            <button
                                class="text-white bg-blue-600 px-3 rounded-full mr-2"
                            >
                                Visit Store
                            </button>
                            <button
                                class="text-blue-600 px-3 rounded-full border border-blue-400"
                            >
                                +Follow
                            </button>
                        </div>
                    </div>

                    <div class="border border-gray-300 py-5 px-3 mt-2">
                        <TextWithIcon
                            class="mb-2"
                            text="Cash On Delivery"
                            textStyle="text-sm text-gray-500 mb-1 ml-1"
                            icon="mdi mdi-cash-check"
                            iconStyle="text-blue-500 text-xl"
                        />
                        <TextWithIcon
                            text="Warranty Available"
                            textStyle="text-sm text-gray-500 mb-1 ml-1"
                            icon="mdi mdi-google-maps"
                            iconStyle="text-blue-500 text-xl"
                        />
                        <TextWithIcon
                            text="Warranty Available"
                            textStyle="text-sm text-gray-500 mb-1 ml-1"
                            icon="mdi mdi-recycle"
                            iconStyle="text-blue-500 text-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from '@/components/atom/BreadCrumb'
    import Gallery from '@/components/molecule/detail/Gallery'
    import Availability from '@/components/molecule/detail/Availability'
    import PriceBox from '@/components/atom/PriceBox'
    import StarBox from '@/components/atom/StarBox'
    import TextWithIcon from '@/components/atom/TextWithIcon'
    import SizeBox from '@/components/atom/SizeBox'
    import IncrementBox from '@/components/atom/IncrementBox'
    import TextWithBgImage from '@/components/atom/TextWithBgImage'
  export default {
    name: 'Gallery and detail',
    components:{
        BreadCrumb,
        Gallery,
        Availability,
        PriceBox,
        StarBox,
        TextWithIcon,
        SizeBox,
        IncrementBox,
        TextWithBgImage
    },
    props:{

    },
    data(){
      return{

      }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>
  
</style>