<template>
  <section class="blogs-list">
    <PlatformBlog class="blogs-list__item" />
    <PlatformBlog class="blogs-list__item" />
    <PlatformBlog class="blogs-list__item" />
    <PlatformBlog class="blogs-list__item" />
  </section>
</template>

<script setup>
  import PlatformBlog from "@/components/Blogs/PlatformBlogsItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-list";
</style>