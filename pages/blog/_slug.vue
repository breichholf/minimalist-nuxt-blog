<template>
  <div>
    <div>
      <nuxt-link :to="{path: '/blog'}">
        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" aria-hidden="true" style="width: 16px; transform: rotate(180deg);">
            <polygon fill="currentColor" points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"/>
        </svg>
        Return to Blog
      </nuxt-link>
    </div>
    <article>
        <DynamicMarkdown dir="blog" :slug="articleSlug" />
    </article>
  </div>
</template>

<script>
  import DynamicMarkdown from "~/components/DynamicMarkdown.vue"
  import config from '~/assets/config.json'

  export default {
    components: {
      DynamicMarkdown
    },
    data () {
      return {
        author: config.author
      }
    },
    computed: {
      articleSlug() {
        return this.$route.params.slug;
      }
    }
  }
</script>

<style scoped>

</style>
