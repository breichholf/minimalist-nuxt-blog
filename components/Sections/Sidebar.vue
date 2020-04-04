<template>
  <aside class="md:w-3/12 md:max-w-full" >
    <div>
      <div>
        <img>
        <span>{{ author }}</span>
      </div>
      <div class="flex flex-row items-center">
        <div v-for="link in convertLinks(socialLinks)" :key="link.network" class="px-1">
          <svg v-if="link.isOcticonMember" class="icon"
              xmlns="http://www.w3.org/2000/svg" v-html="link.octiconPath">
          </svg>
          <svg-icon v-else :name="link.network" />
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
          if (key === "scholar") {
            octiconPath = octicons['mortar-board'].path
          }
          out['network'] = key;
          out['link'] = profiles[key];
          // We will be (ab)using an icon from Octicons for google scholar
          out['isOcticonMember'] = (key === "github" || key === "scholar") ? true : false;
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
    @apply fill-current inline-block w-4 h-4;
  }
</style>
