<template>
  <nav class="breadcrumbs">
    <a class="breadcrumbs__item breadcrumbs__item--root"
       href="#"
    >
      Blogs
    </a>
    <ArrowRight class="breadcrumbs__separator" />
    <span class="breadcrumbs__item">The best blog in our village</span>
  </nav>
</template>

<script setup>
  import ArrowRight from "@/assets/icons/ArrowRight.vue";
</script>

<style scoped lang="scss">
  @forward "@/components/Breadcrumbs/styles/platform-breadcrumbs";
</style>