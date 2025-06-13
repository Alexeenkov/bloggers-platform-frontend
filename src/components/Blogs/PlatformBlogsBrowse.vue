<template>
  <section class="blogs-browse" v-if="blog">
    <div class="blogs-browse__breadcrumbs blogs-browse-breadcrumbs">
      <PlatformBreadcrumbs
          pageName="Blogs"
          pageLink="/bloggers-platform-frontend/blogs"
          :subpageName="blog.name"
      />
    </div>

    <div class="blogs-browse__navigation blogs-browse-navigation">
      <PlatformBackLink
          linkText="Back to blogs"
          linkPath="/bloggers-platform-frontend/blogs"
      />
    </div>

    <picture class="blogs-browse__picture blogs-browse-picture">
      <img
          class="blogs-browse-picture__img"
          src="@/assets/images/empty-1028.jpg"
          alt="Blog" />
    </picture>

    <div class="blogs-browse-intro blogs-browse__intro">
      <PlatformBlogsBrowseItem
        :blog="blog"
      />
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
import {onBeforeMount, ref} from "vue";

const pathName = window.location.pathname;
const blogId = pathName.slice(pathName.lastIndexOf('/') + 1);
const blog = ref(null);

async function loadData() {
  const mockData = await import(`@/mocks/blogs/${blogId}.json`);
  blog.value = mockData.default;
  blog.value.createdAtStr = new Date(blog.value.createdAt).toLocaleDateString('ru-RU');
}

onBeforeMount(() => {
  loadData();
})

</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-browse";
</style>