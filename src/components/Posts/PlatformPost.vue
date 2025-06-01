<template>
  <li class="platform-post">
    <picture class="platform-post-picture platform-post__picture">
      <img
          src="@/assets/images/empty-300.jpg"
          alt="image"
          class="platform-post-picture__img"
      >
    </picture>
    <div class="platform-post-body">
      <picture class="platform-post-picture platform-post-body__picture platform-post-body-picture">
        <img
            src="@/assets/images/empty-48.jpg"
            alt="preview"
            class="platform-post-picture__img"
        >
      </picture>
      <div class="platform-post__content">
        <h2 class="platform-post-title">Let's fly into space</h2>
        <p class="platform-post-description platform-post__description">The best blog in our village</p>
        <p class="platform-post-date platform-post__date">12.12.2022</p>
      </div>
    </div>
  </li>
</template>

<script setup>
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-post";
</style>