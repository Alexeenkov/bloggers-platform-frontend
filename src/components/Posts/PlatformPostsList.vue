<template>
  <section class="posts-list">
    <PlatformPostsItem />
    <PlatformPostsItem />
    <PlatformPostsItem />
    <PlatformPostsItem />
    <PlatformPostsItem />
  </section>
</template>

<script setup>
import PlatformPostsItem from "@/components/Posts/PlatformPostsItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts-list";
</style>