<template>
  <article class="blog">
    <div class="blog__container">
      <div class="blog-img">
        <img class="blog-img__icon" src="@/assets/icons/empty.svg" alt="image">
      </div>
      <div class="blog__content">
        <h2 class="blog-title blog__title">The best blog in our village</h2>
        <p class="blog-subtitle blog__subtitle">
          Website:
          <a href="https://www.youtube.com/" class="blog-subtitle__link">https://www.youtube.com/</a>
        </p>
        <p class="blog-description blog__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
    </div>
  </article>
</template>

<script setup>

</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/blog-item";
</style>