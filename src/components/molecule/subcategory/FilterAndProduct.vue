<template>
  <div class="bg-white pt-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-8 gap-4">

        <div class="col-span-8 sm:col-span-6 sm:hidden text-sm">
          <div class="flex items-center bg-gray-100 shadow-md px-3 py-2">
            <p class="text-sm text-gray-600">All Categories >
              <span class="text-blue-500">Pumps</span>
              (1256 Products)
            </p>
             <Dropdown :filterMenus="filterMenus" />
          </div>

            <div class="grid xl:grid-cols-4 mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2">
            <div 
              class="mb-5" 
              v-for="(item, index) in products"
              :key="index"
            >
              <ProductCard :id="item.id" />
            </div>
          </div>
        </div>

        <div class="col-span-8 sm:col-span-2 bg-gray-100">
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

                <ProductType/>


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

                <BrandFilter/>

                 <Add
                  class="mt-16 mb-16"
                  image="/images/add3.jpg"
                />
              </div>
            </div>

          </div>
        </div>

        <!-- right-side-column -->
        <div class="col-span-8 sm:col-span-6 hidden sm:block">
          <div class="flex items-center bg-gray-100 shadow-md px-3 py-2">
            <p class="text-sm text-gray-600">All Categories >
              <span class="text-blue-500">Pumps</span>
              (1256 Products)
            </p>
             <Dropdown :filterMenus="filterMenus" />
          </div>

          <!-- product list   -->
          <div class="grid xl:grid-cols-4 mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2">
            <div 
              class="mb-5" 
              v-for="(item, index) in products"
              :key="index"
            >
              <ProductCard :id="item.id" />
            </div>
          </div>
          <!--end  product list   -->
          <Add 
            image="/images/add.jpg"
          />
        </div>
        <!--end right-side-column -->

      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/data/products"
import ProductCard from "@/components/molecule/product/ProductCard.vue";
import {filterMenus} from '@/data/products.js'
import RangeSlider from '@/components/atom/RangeSlider'
import ProductType from '@/components/molecule/subcategory/ProductType'
import BrandFilter from '@/components/molecule/subcategory/BrandsFilter'
import Dropdown from '@/components/atom/Dropdown'
import Search from '@/components/atom/Search'
import Add from '@/components/atom/Add'

export default {
  name: 'FilterAndProduct',
  components: {
    RangeSlider,
    Search,
    ProductType,
    BrandFilter,
    Dropdown,
    ProductCard,
    Add
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    filterMenus() {
      return filterMenus;
    },
    products() {
      return products.slice(0, 12);
    }
  },
  watch: {},
  methods: {}
}
</script>

<style>

</style>