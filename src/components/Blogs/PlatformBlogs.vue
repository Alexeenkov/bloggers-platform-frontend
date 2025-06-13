<template>
  <section class="blogs">
    <div class="blogs__header blogs-header">
      <PlatformBreadcrumbs :items="breadcrumbsItems"/>
    </div>

    <div class="blogs__navigation blogs-navigation">
      <PlatformSearch class="blogs-navigation__search" />
    </div>

    <div class="blogs__content">
      <PlatformBlogsList />
    </div>
  </section>
</template>

<script setup>
import PlatformBlogsList from "@/components/Blogs/PlatformBlogsList.vue";
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";
import PlatformSearch from "@/components/Search/PlatformSearch.vue";

const breadcrumbsItems = [
  {
    name: 'Blogs',
  }
];
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs";
</style>