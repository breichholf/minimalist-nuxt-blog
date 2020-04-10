<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-gray-900">
    <Navbar />
    <main class="flex-grow px-8 py-10 md:px-12 lg:px-16 xl:px-20">
      <div class="flex">
        <nuxt />
        <div class="flex-none pl-8">
          <Sidebar />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Sections/Navbar"
import Sidebar from "@/components/Sections/Sidebar"
import Footer from "@/components/Sections/Footer"

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
}
</script>

<style>
/*
 Applying some general settings to straigthen out the tailwindcss base
 */
h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}

body {
  @apply flex flex-col min-h-screen;
  @apply text-base font-sans font-light;
  @apply overflow-y-scroll;
}

b,
strong {
  @apply font-semibold;
}

ul {
  @apply list-disc list-inside;
}

ol {
  @apply list-decimal list-inside;
}

/*
 Custom Settings -- Links
 */
a:not(.social-link) {
  @apply text-green-500;

  &:hover {
    @apply text-green-700 underline;
  }
}

/*
 Settings for markdown-it-prism code highlighting
 */
pre[class*="language-"] {
  @apply rounded;
}

/*
 Correct twemoji flow in text
 */
img.emoji {
  @apply inline-block w-4 h-4;
  margin: 0 0.05rem 0 0.1rem;
  vertical-align: -0.1rem;
}

blockquote {
  @apply p-4 italic;
}

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

 */
</style>
