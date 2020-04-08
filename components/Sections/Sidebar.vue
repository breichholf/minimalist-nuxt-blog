<template>
  <aside class="flex w-48">
    <div class="flex flex-col flex-none items-center">
      <div class="flex flex-col items-center text-center pt-2 pb-2 border-b border-gray-500">
        <img src="~/assets/profile-pic.svg" class="w-16 h-16 rounded-full overflow-hidden bg-white border border-gray-400" />
        <span class="author">{{ author }}</span>
        <span class="tagline" v-html="tagline"></span>
      </div>
      <div class="flex flex-row items-center pt-1">
        <a v-for="social in convertLinks(socialLinks)" class="social-link px-1"
            :key="social.network" :href="social.link">
          <svg v-if="social.isOcticonMember" class="icon"
              xmlns="http://www.w3.org/2000/svg" v-html="social.octiconPath">
          </svg>
          <svg-icon v-else :name="social.network" />
        </a>
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
          let base_urls = config['_profile_comments']
          let base_key = '_' + key + '_base'
          let octiconPath = null;
          if (key === "github") {
            octiconPath = octicons['mark-github'].path
          }
          out['network'] = key;
          out['link'] = base_urls[base_key] + profile[key];
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

  .author {
    @apply text-lg font-normal;
  }

  .tagline {
    @apply italic text-xs text-gray-700 font-thin;
  }

  /* .social-link {
    @apply mb-1;
  } */
</style>
