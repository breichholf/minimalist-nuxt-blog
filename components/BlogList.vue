<template>
  <div>
    <h1>
      Blog Index
    </h1>
    <article
      v-for="article in articles"
      :key="article.attributes.title"
      :class="{ 'mt-6': articles.length > 1 }"
    >
      <h2>
        <nuxt-link :to="`/blog/${article.basename}`">
          {{ article.attributes.title }}
        </nuxt-link>
      </h2>
      <div class="flex items-center text-gray-500">
        <svg
          class="h-4 w-4 fill-current inline-block mr-1"
          xmlns="http://www.w3.org/2000/svg"
          v-html="calendar"
        />
        <span>&middot; {{ article.attributes.date }}</span>
      </div>
      <section>
        {{ article.attributes.description }}
      </section>
      <div>
        <nuxt-link
          :to="{
            path: `/blog/${article.basename}`,
            params: { articleSlug: article.basename },
          }"
        >
          [ Read more ... ]
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import octicons from "@primer/octicons"

export default {
  props: {
    allBlogs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      articles: [],
      prefix: "blog",
    }
  },
  mounted() {
    this.articles = this.allBlogs
    this.calendar = octicons.calendar.path
  },
}
</script>

<style></style>
