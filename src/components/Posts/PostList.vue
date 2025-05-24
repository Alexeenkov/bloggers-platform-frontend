<template>
  <div class="post-list">
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
    <PostItem class="post-list__item" />
  </div>
</template>

<script setup>
import PostItem from "@/components/Posts/PostItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/post-list";
</style>