<template>
  <div class="flex flex-col min-h-screen bg-grey-200 text-grey-1000">
    <Navbar />
    <main class="container mx-auto flex flex-grow py-24 px-12">
      <nuxt />
      <div class="hidden flex-none pl-8 w-56 md:block">
        <Sidebar />
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
  @apply font-serif text-2xl;
}
h2 {
  @apply font-serif font-normal text-xl;
}
h3 {
  @apply font-serif font-normal text-lg;
}

body {
  @apply flex flex-col min-h-screen;
  @apply text-base font-light;
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

main {
  @apply w-full;
}

.content {
  /* We need to restrict width here,
   * or the rendered code box will overflow
   */
  @apply flex-grow w-1/2;
}

/*
 Custom Settings -- Links
 */
a:not(.social-link) {
  @apply text-green-500;

  &:hover {
    @apply text-green-800 underline;
  }
}

/*
 Settings for markdown-it-prism code highlighting
 */
pre[class*="language-"] {
  @apply rounded flex overflow-x-scroll;
}

code[class*="language-"] {
  @apply inline-block;
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
