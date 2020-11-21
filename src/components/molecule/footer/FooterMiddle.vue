<template>
	<div class="sm:bg-purple-500 md:bg-gray-700 py-5">
		<div class="container flex-wrap flex mx-auto">

			<div class="w-full sm:w-2/4 lg:w-4/12 p-2 flex items-center hidden md:block lg:block xl:block">
				<div class="flex items-center">
					<span class="mdi mdi-paper-roll-outline text-5xl text-gray-200 mr-3"></span>
					<div class="flex flex-col">
						<span class="capitalize text-gray-200 font-semibold">Sign up for newsletter</span>
						<span class="text-gray-500 text-sm">We will never share your email to third party.</span>
					</div>
				</div>
			</div>

			<div class="w-full sm:w-2/4 lg:w-5/12 flex items-center">
				<div class="flex w-full p-2 items-center">
          <button
              class="bg-black rounded text-white font-bold hover:bg-blue-800 focus:outline-none px-3 h-10 xl:hidden lg:hidden md:hidden sm:block">
            Subscribe
          </button>

					<input 
						placeholder="Your email address"
						class="hover:bg-white border-solid border border-blue-400 rounded focus:border-blue-400 focus:outline-none w-full h-10 px-3" type="text">
					<button 
						class="bg-blue-700 rounded text-white font-bold hover:bg-blue-800 focus:outline-none px-3 h-10 hidden md:block lg:hidden xl:block">
						Subscribe
					</button>
				</div>
			</div>

			<div class="w-full sm:w-2/4 lg:w-3/12 flex items-center pl-5">
				<div class="flex w-full p-2 items-center justify-center">
					<a href="" class="text-gray-200 text-center sm:text-xs md:text-base">
						<span class="mdi  mdi-facebook mr-2"></span>
						<span>Facebook</span>
					</a>
					<a href="" class="text-gray-200 text-center sm:text-xs md:text-base">
						<span class="mdi mdi-twitter mr-2 sm:ml-2"></span>
						<span>Twitter</span>
					</a>
					<a href="" class="text-gray-200 text-center sm:text-xs md:text-base">
						<span class="mdi mdi-linkedin mr-2 sm:ml-2"></span>
						<span>Linkedin</span>
					</a>
				</div>
			</div>

		</div>
	</div>
</template>