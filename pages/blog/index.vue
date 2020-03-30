<template>
  <div>
    <BlogList :all-blogs="posts"
    />
  </div>
</template>

<script>
import BlogList from "@/components/BlogList"

export default {
  components: {
    BlogList
  },
  async asyncData() {
    const req = require.context(`~/content/blog`, true, /\.md$/);
    const importedFiles = req.keys().map(key => {
      const singleFile = req(key);
      // Insert slug from filename in attributes if it doesn't exist yet
      if (!('slug' in singleFile.attributes)) {
        singleFile['basename'] = key.split('\\').pop().split('/').pop().split('.')[0];
      } else {
        singleFile['basename'] = singlefile.attributes.slug
      }
      return singleFile
    });
    return {
      // Files are sorted alphabetically in ascending order
      // As blog file naming convention is YYYY-MM-DD, we need to reverse order
      // to get an 'newest-to-oldest'-order
      // TODO: We don't have pagination here yet
      posts: importedFiles.reverse()
    };
  },
  data() {
    return {
      prefix: 'blog'
    }
  }
}
</script>

<style>

</style>
