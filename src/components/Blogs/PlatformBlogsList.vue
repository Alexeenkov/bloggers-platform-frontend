<template>
  <!-- TODO: Изменить на <ul> -->
  <section class="blogs-list">
    <PlatformBlogsItem
        class="blogs-list__item"
        v-for="blog in blogs.items"
        :key="blog.id"
        :blog="blog"
    />
  </section>
</template>

<script setup>
  import PlatformBlogsItem from "@/components/Blogs/PlatformBlogsItem.vue";
  import blogs from "@/mocks/blogs.json";
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-list";
</style>