<template>
    <div class="bg-white pt-10">
        <div class="container mx-auto">
            <div class="grid grid-cols-8 gap-4">
                <div class="col-span-2 bg-gray-100">
                    <div class="wrapper border rounded px-3">
                <!-- price Range -->
                        <div class="border-b">
                            <div class=" px-3 py-1">
                                <p class="uppercase text-gray-700 font-semibold text-sm">
                                    Price Range 
                                    <small class="text-gray-500">(BDT)</small>
                                </p>
                                <RangeSlider
                                    class="mt-5 mb-3"
                                />
                            </div>
                        </div>

                <!-- Product Filter -->
                        <div class="border-b mt-5">
                            <div class=" px-3 py-1">
                                <p class="uppercase text-gray-700 font-semibold text-sm">
                                    type of product 
                                </p>
                                <Search
                                    class="mt-2 mb-3"
                                />

                                <ProductType />
                            </div>
                        </div>

                <!-- Product Filter -->
                        <div class="border-b mt-5">
                            <div class=" px-3 py-1">
                                <p class="uppercase text-gray-700 font-semibold text-sm">
                                    brands
                                </p>
                                <Search
                                    class="mt-2 mb-3"
                                    placeholder="Search by Brand"
                                />

                                <BrandFilter />
                            </div>
                        </div>



                    </div>
                </div>

                <div class="col-span-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolore odio incidunt culpa, in id aliquid unde quo amet nam vitae esse similique ipsam hic quis. Officia necessitatibus illo tempora.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import RangeSlider from '@/components/atom/RangeSlider'
    import ProductType from '@/components/molecule/subcategory/ProductType'
    import BrandFilter from '@/components/molecule/subcategory/BrandsFilter'
    import Search from '@/components/atom/Search'
  export default {
    name: 'FilterAndProduct',
    components:{
        RangeSlider,
        Search,
        ProductType,
        BrandFilter
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