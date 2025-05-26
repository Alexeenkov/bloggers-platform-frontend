<template>
  <section class="blog-list">
    <div class="blog-list__inner">
      <PlatformBlogItem />
      <PlatformBlogItem />
      <PlatformBlogItem />
    </div>
  </section>
</template>

<script setup>
  import PlatformBlogItem from "@/components/Blogs/PlatformBlogItem.vue";
</script>


<style scoped lang="scss">
  @forward "@/components/Blogs/styles/blog-list";
</style>