<template>
  <ul class="platform-post-list">
    <PlatformPostItem class="platform-post-list__item" />
    <PlatformPostItem class="platform-post-list__item" />
    <PlatformPostItem class="platform-post-list__item" />
    <PlatformPostItem class="platform-post-list__item" />
    <PlatformPostItem class="platform-post-list__item" />
  </ul>
</template>

<script setup>
import PlatformPostItem from "@/components/Posts/PlatformPost.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-post-list";
</style>