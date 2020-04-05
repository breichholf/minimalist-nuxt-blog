<template>
  <aside class="flex">
    <div class="flex flex-col flex-none items-center w-48">
      <div class="flex flex-col items-center text-center border-b border-gray-500">
        <img>
        <span class="author">{{ author }}</span>
        <span class="tagline" v-html="tagline"></span>
      </div>
      <div class="flex flex-row items-center">
        <div v-for="social in convertLinks(socialLinks)" :key="social.network" class="px-1">
          <a :href="social.link" class="social-link">
            <svg v-if="social.isOcticonMember" class="icon"
                xmlns="http://www.w3.org/2000/svg" v-html="social.octiconPath">
            </svg>
            <svg-icon v-else :name="social.network" />
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import config from '~/assets/config.json'
import octicons from '@primer/octicons'

export default {
  data() {
    return {
      author: config.author,
      tagline: config.tagline,
      socialLinks: config.profiles,
    }
  },
  methods: {
    convertLinks(profiles) {
      const iconArray = Object.keys(profiles).map(
        function(key, idx) {
          const out = {};
          var octiconPath = null;
          if (key === "github") {
            octiconPath = octicons['mark-github'].path
          }
          out['network'] = key;
          out['link'] = profiles[key];
          // We will be (ab)using an icon from Octicons for google scholar
          out['isOcticonMember'] = key === "github" ? true : false;
          out['octiconPath'] = octiconPath
          return out
        }
      );
      return iconArray;
    }
  }
}
</script>

<style scoped>
  .icon {
    @apply fill-current text-gray-500 inline-block w-4 h-4;

    &:hover {
      @apply text-gray-900;
    }
  }
</style>
