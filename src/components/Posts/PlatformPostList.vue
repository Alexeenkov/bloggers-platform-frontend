<template>
  <div class="post-list">
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
    <PlatformPostItem class="post-list__item" />
  </div>
</template>

<script setup>
import PlatformPostItem from "@/components/Posts/PlatformPostItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/post-list";
</style>