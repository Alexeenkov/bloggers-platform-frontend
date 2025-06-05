<template>
  <a class="blogs-item"
     href="#"
  >
    <picture class="blogs-item__picture">
      <img
          src="@/assets/images/empty-300.jpg"
          alt="image"
      >
    </picture>
    <div class="blogs-item__content blogs-item-content">
      <h2 class="blogs-item-content__title">The best blog in our village</h2>
      <p class="blogs-item-content__subtitle">
        Website:
        <a class="blogs-item-content__link"
           href="https://www.youtube.com/"
           target="_blank"
        >
          https://www.youtube.com/
        </a>
      </p>
      <p class="blogs-item-content__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor
      </p>
    </div>
  </a>
</template>

<script setup>

</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-item";
</style>