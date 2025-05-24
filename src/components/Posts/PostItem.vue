<template>
  <article class="post">
    <div class="post__container">
      <div class="post-image">
        <img src="@/assets/icons/empty.svg" alt="image" class="post-image__icon">
      </div>
      <div class="post__inner">
        <div class="post__preview post-preview">
          <img src="@/assets/icons/empty.svg" alt="preview" class="post-preview__image">
        </div>
        <div class="post__content">
          <h2 class="post-title">Let's fly into space</h2>
          <p class="post-description">The best blog in our village</p>
          <p class="post-date">12.12.2022</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/post-item";
</style>