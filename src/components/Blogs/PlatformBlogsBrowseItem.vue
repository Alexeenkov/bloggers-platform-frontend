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
      <h2 class="blogs-browse-item-content__title"> {{ blog.name }} </h2>
      <p class="blogs-browse-item-content__date">
        Blog creation date:
        <span class="blogs-browse-item-content__date--accent">{{ blog.createdAtStr }}</span>
      </p>
      <p class="blogs-browse-item-content__subtitle">
        Website:
        <a class="blogs-browse-item-content__link"
           :href="blog.websiteUrl"
           target="_blank"
        >
          {{ blog.websiteUrl }}
        </a>
      </p>
      <div class="blogs-browse-item-content__description blogs-browse-item-content-description">
        <span class="blogs-browse-item-content-description__text">
          {{ blog.description }}
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

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
});

</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-browse-item";
</style>