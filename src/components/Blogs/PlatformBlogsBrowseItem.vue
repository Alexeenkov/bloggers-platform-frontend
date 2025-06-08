<!-- TODO: Добавить обёртку в <li> -->
<template>
  <div class="blogs-browse-item">
    <picture class="blogs-browse-item__picture blogs-browse-item-picture">
      <img class="blogs-browse-item-picture__img"
           src="@/assets/images/empty-300.jpg"
           alt="image"
      >
    </picture>
    <div class="blogs-browse-item__content blogs-browse-item-content">
      <h2 class="blogs-browse-item-content__title">The best blog in our village</h2>
      <p class="blogs-browse-item-content__date">
        Blog creation date:
        <span class="blogs-browse-item-content__date--accent">12.12.2022</span>
      </p>
      <p class="blogs-browse-item-content__subtitle">
        Website:
        <a class="blogs-browse-item-content__link"
           href="https://www.youtube.com/"
           target="_blank"
        >
          https://www.youtube.com/
        </a>
      </p>
      <div class="blogs-browse-item-content__description blogs-browse-item-content-description">
        <span class="blogs-browse-item-content-description__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </span>
        <div class="blogs-browse-item-content-description__footer">
          <PlatformButtonMore class="blogs-browse-item-content-description__button"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlatformButtonMore from "@/components/ButtonMore/PlatformButtonMore.vue";
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-browse-item";
</style>