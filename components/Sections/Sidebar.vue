<template>
  <aside class="flex">
    <div class="flex flex-col flex-none items-center w-48">
      <div
        class="flex flex-col items-center text-center pt-2 pb-2 border-b border-gray-500"
      >
        <img src="~/assets/profile-pic.svg" class="profile" />
        <span class="author">{{ author }}</span>
        <span class="tagline" v-html="tagline"></span>
      </div>
      <div class="flex flex-row items-center pt-1">
        <a
          v-for="social in convertLinks(socialLinks)"
          class="social-link px-1"
          :key="social.network"
          :href="social.link"
        >
          <svg
            class="icon"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            v-html="social.svgPath"
          ></svg>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import config from "~/assets/config.json"
import svgicons from "~/assets/svgicons.json"

export default {
  data() {
    return {
      author: config.author,
      // The tagline could be applied with handlebars, but as it contains
      // HTML code needs to be wrapped in v-html to display correctly
      tagline: config.tagline,
      socialLinks: config.profiles,
    }
  },
  methods: {
    convertLinks(socialProfiles) {
      const iconArray = Object.keys(socialProfiles).map(function (key, idx) {
        const out = {}
        let base_urls = config["_profile_comments"]
        let base_key = "_" + key + "_base"
        out["network"] = key
        out["link"] = base_urls[base_key] + socialProfiles[key]
        // Github icon has been modified and incorporated from octicons
        out["svgPath"] = svgicons[key].path
        return out
      })
      return iconArray
    },
  },
}
</script>

<style scoped>
.icon {
  @apply fill-current text-gray-500 inline-block w-4 h-4;

  &:hover {
    @apply text-gray-900;
  }
}

.author {
  @apply text-lg font-normal;
}

.tagline {
  @apply italic text-xs text-gray-700 font-thin;
}

.profile {
  @apply w-16 h-16 rounded-full overflow-hidden bg-white;
  box-shadow: inset 0 0 0.25rem 0 rgba(0, 0, 0, 0.25);
}

/* .social-link {
  @apply mb-1;
} */
</style>
