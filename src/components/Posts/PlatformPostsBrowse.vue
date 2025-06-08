<template>
  <section class="posts-browse">
    <div class="posts-browse__breadcrumbs posts-browse-breadcrumbs">
      <PlatformBreadcrumbs />
    </div>

    <nav class="posts-browse__navigation">
      <PlatformBackLink
        linkText="Back to posts"
        linkPath="posts"
      />
    </nav>

    <div class="posts-browse__wrapper">

      <a
          class="posts-browse__blog posts-browse-blog"
          href="#"
      >
        <picture class="posts-browse-blog__picture posts-browse-blog-picture">
          <img src="@/assets/images/empty-48.jpg" alt="post" class="posts-browse-blog-picture__img">
        </picture>

        <p class="posts-browse-blog__title">Back-end blog</p>
      </a>

      <p class="posts-browse__title">First day at the office</p>

      <p class="posts-browse__date">12/12/2022 at 15:46:58</p>

      <picture class="posts-browse__picture posts-browse-picture">
        <img
            class="posts-browse-picture__img"
            src="@/assets/images/empty-1028.jpg"
            alt="Blog" />
      </picture>

      <div class="posts-browse-description posts-browse__description">
        <p class="posts-browse-description__text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent velit, tempor
          posuere natoque habitasse phasellus dignissim.
        </p>
        <p class="posts-browse-description__text">
          Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed vestibulum
          molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna justo.
        </p>
        <p class="posts-browse-description__text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent velit, tempor
          posuere natoque habitasse phasellus dignissim.
        </p>
        <p class="posts-browse-description__text">
          Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed vestibulum
          molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna justo.
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
import PlatformBreadcrumbs from "@/components/Breadcrumbs/PlatformBreadcrumbs.vue";
import PlatformBackLink from "@/components/BackLink/PlatformBackLink.vue";
</script>


<style scoped lang="scss">
@forward "@/components/posts/styles/platform-posts-browse";
</style>