<template>
  <li class="platform-blog">
    <picture class="platform-blog-picture platform-blog__picture">
      <img
          src="@/assets/images/empty-300.jpg"
          alt="image"
      >
    </picture>
    <div class="platform-blog__content">
      <h2 class="platform-blog-title">The best blog in our village</h2>
      <p class="platform-blog-subtitle platform-blog__subtitle">
        Website:
        <a href="https://www.youtube.com/" class="platform-blog-subtitle__link">https://www.youtube.com/</a>
      </p>
      <p class="platform-blog-description platform-blog__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
  </li>
</template>

<script setup>

</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blog";
</style>