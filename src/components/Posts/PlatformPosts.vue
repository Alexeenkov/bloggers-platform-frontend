<template>
  <section class="posts">
    <div class="posts__header posts-header">
      <PlatformBreadcrumbs :items="breadcrumbsItems"/>
    </div>

    <div class="posts__content">
      <PlatformPostsList />
    </div>
  </section>
</template>

<script setup>
import PlatformPostsList from "@/components/Posts/PlatformPostsList.vue";
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";

const breadcrumbsItems = [
  {
    name: 'Posts',
  }
];
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts";
</style>