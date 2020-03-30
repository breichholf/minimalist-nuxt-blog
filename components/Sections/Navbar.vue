<template>
  <header id="top" class="bg-white border-b border-gray-900 sm:flex sm:items-center px-4 py-2">
    <div class="">
      <div>
        <!-- the image/logo will go here -->
      </div>
      <!-- <nav class="flex items-center flex-shrink-0 text-gray-900"> -->
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" class="block items-center px-2 py-2 text-green-500 hover:text-green-700 focus:outline-none focus:text-green-700">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <!-- <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/> -->
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- </nav> -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:flex px-2 pb-1 flex-grow sm:items-center sm:w-auto">
      <nuxt-link :to="{name: 'index'}" class="block sm:inline-block sm:mt-0 tw-link mr-4">
          Home
      </nuxt-link>
      <nuxt-link :to="{name: 'index'}" class="block sm:inline-block sm:mt-0 tw-link mr-4">
          About
      </nuxt-link>
      <nuxt-link :to="{name: 'index'}" class="block sm:inline-block sm:mt-0 tw-link mr-4">
          Projects
      </nuxt-link>
      <nuxt-link :to="{path: '/blog'}" class="block sm:inline-block sm:mt-0 tw-link">
          Blog
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style>

</style>
