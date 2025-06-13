<template>
  <section class="posts-browse" v-if="post">
    <div class="posts-browse__breadcrumbs posts-browse-breadcrumbs">
      <PlatformBreadcrumbs
        pageName="Posts"
        pageLink="/posts"
        :subpageName="post.title"
      />
    </div>

    <nav class="posts-browse__navigation">
      <PlatformBackLink
        linkText="Back to posts"
        linkPath="/posts"
      />
    </nav>

    <div class="posts-browse__wrapper">

      <router-link v-if="blog"
          class="posts-browse__blog posts-browse-blog"
          :to="'/blogs/' + blog.id"
      >
        <picture class="posts-browse-blog__picture posts-browse-blog-picture">
          <img
              class="posts-browse-blog-picture__img"
              src="@/assets/images/empty-48.jpg"
              alt="post"
          >
        </picture>

        <p class="posts-browse-blog__title"> {{ blog.name }} </p>
      </router-link>

      <p class="posts-browse__title">{{ post.title }}</p>

      <p class="posts-browse__date">{{ formatDate(post.createdAt) }}</p>

      <picture class="posts-browse__picture posts-browse-picture">
        <img
            class="posts-browse-picture__img"
            src="@/assets/images/empty-1028.jpg"
            alt="Blog" />
      </picture>

      <div class="posts-browse-description posts-browse__description">
        <p class="posts-browse-description__text">
          {{ post.shortDescription }}
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";
import PlatformBackLink from "@/components/BackLink/PlatformBackLink.vue";
import {onBeforeMount, ref} from "vue";

const pathName = window.location.pathname;
const postId = pathName.slice(pathName.lastIndexOf('/') + 1);
const post = ref(null);
const blog = ref(null);

async function loadData() {
  const postMockData = await import(`@/mocks/posts/${postId}.json`);
  post.value = postMockData.default;
  post.value.createdAtStr = new Date(post.value.createdAt).toLocaleDateString('ru-RU');
  const blogMockData = await import(`@/mocks/blogs/${post.value.blogId}.json`);
  blog.value = blogMockData.default;
}

function formatDate(date) {
  const dateObj = new Date(date);

  const datePart = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObj);

  const timePart = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(dateObj);

  return `${datePart} at ${timePart}`;
}

onBeforeMount(() => {
  loadData();
});
</script>


<style scoped lang="scss">
@forward "@/components/posts/styles/platform-posts-browse";
</style>