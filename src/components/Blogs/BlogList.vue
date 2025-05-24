<template>
  <section class="blog-list">
    <div class="blog-list__inner">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  </section>
</template>

<script setup>
  import BlogItem from "@/components/Blogs/BlogItem.vue";
</script>


<style scoped lang="scss">
  @forward "@/components/Blogs/styles/blog-list";
</style>