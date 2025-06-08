<template>
  <section class="blogs-browse">
    <div class="blogs-browse__breadcrumbs blogs-browse-breadcrumbs">
      <PlatformBreadcrumbs />
    </div>

    <div class="blogs-browse__navigation blogs-browse-navigation">
      <PlatformBackLink
          linkText="Back to blogs"
          linkPath="blogs"
      />
    </div>

    <picture class="blogs-browse__picture blogs-browse-picture">
      <img
          class="blogs-browse-picture__img"
          src="@/assets/images/empty-1028.jpg"
          alt="Blog" />
    </picture>

    <div class="blogs-browse-intro blogs-browse__intro">
      <PlatformBlogsBrowseItem />
    </div>

    <div class="blogs-browse__posts blogs-browse__posts">
      <PlatformPostsList />
    </div>
  </section>
</template>

<script setup>
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";
import PlatformBackLink from "@/components/BackLink/PlatformBackLink.vue";
import PlatformPostsList from "@/components/Posts/PlatformPostsList.vue";
import PlatformBlogsBrowseItem from "@/components/Blogs/PlatformBlogsBrowseItem.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-browse";
</style>