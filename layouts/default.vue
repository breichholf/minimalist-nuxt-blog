<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-gray-900">
    <Navbar />
    <main class="flex-grow p-8">
      <div class="flex">
        <nuxt />
        <div class="flex-none w-64 pl-4">
          <Sidebar />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Sections/Navbar'
  import Sidebar from '@/components/Sections/Sidebar'
  import Footer from '@/components/Sections/Footer'

  export default {
    components: {
      Navbar,
      Sidebar,
      Footer
    }
  }
</script>

<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
