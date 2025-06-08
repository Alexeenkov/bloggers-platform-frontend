<template>
  <section class="posts">
    <div class="posts__header posts-header">
      <PlatformBreadcrumbs
          :pageName="'Posts'"
          :pageLink="'posts'"
      />
    </div>

    <div class="posts__content">
      <PlatformPostsList />
    </div>
  </section>
</template>

<script setup>
import PlatformPostsList from "@/components/Posts/PlatformPostsList.vue";
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts";
</style>