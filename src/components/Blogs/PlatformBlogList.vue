<template>
  <ul class="platform-blog-list">
    <PlatformBlogItem class="platform-blog-list-item" />
    <PlatformBlogItem class="platform-blog-list-item" />
    <PlatformBlogItem class="platform-blog-list-item" />
    <PlatformBlogItem class="platform-blog-list-item" />
  </ul>
</template>

<script setup>
  import PlatformBlogItem from "@/components/Blogs/PlatformBlogItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blog-list";
</style>