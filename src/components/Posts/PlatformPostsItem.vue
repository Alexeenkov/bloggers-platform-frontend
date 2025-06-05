<template>
  <a class="posts-item"
     href="#"
  >
    <picture class="posts-item__picture">
      <img
          src="@/assets/images/test.jpg"
          alt="image"
          loading="lazy"
      >
    </picture>
    <div class="posts-item-body">
      <a class="posts-item-body__picture"
          href="https://youtube.com/"
      >
        <img
            src="@/assets/images/test.jpg"
            alt="author"
            loading="lazy"
        >
      </a>
      <div class="posts-item-body-content posts-item-body__content">
        <h2 class="posts-item-body-content__title">Let's fly into space</h2>
        <p class="posts-item-body-content__description">The best blog in our village</p>
        <p class="posts-item-body-content__date">12.12.2022</p>
      </div>
    </div>
  </a>
</template>

<script setup>
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts-item";
</style>