<template>
  <div>
    <h1>{{ attributes.title }}</h1>
    <div class="flex items-center text-grey-600">
      <svg
        class="h-4 w-4 fill-current inline-block mr-1"
        xmlns="http://www.w3.org/2000/svg"
        v-html="calendar"
      />
      <span>&middot; {{ attributes.date }}</span>
    </div>
    <component :is="markdownContent" />
  </div>
</template>

<script>
import octicons from "@primer/octicons"

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      markdownContent: null,
      attributes: [],
    }
  },
  created() {
    // const md = require(`~/content/${this.dir}/${this.slug}.md`)
    // this.markdownContent = md.vue.component
    this.markdownContent = () =>
      import(`~/content/${this.dir}/${this.slug}.md`).then((md) => {
        this.attributes = md.attributes
        return {
          extends: md.vue.component,
        }
      })
    this.calendar = octicons.calendar.path
  },
}
</script>

<style scoped></style>
