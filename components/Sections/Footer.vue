<template>
  <footer class="footer">
    <div class="footertext container mx-auto ">
      <span class="text-indigo-100 font-thin">
        © {{ year }} Brian Reichholf, all rights reserved
      </span>
      <!-- <a href="#top" class="text-blue-400 hover:text-blue-600 hover:underline">
        Return to top
      </a> -->
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer {
  @apply w-full bg-bluegrey-1000;
}

.footertext{
  @apply text-bluegrey-100 font-thin px-12 py-6;
}
</style>
