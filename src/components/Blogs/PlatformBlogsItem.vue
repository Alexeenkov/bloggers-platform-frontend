<!-- TODO: Добавить обёртку в <li> -->
<template>
  <router-link class="blogs-item"
     to="blog"
  >
    <picture class="blogs-item__picture blogs-item-picture">
      <img class="blogs-item-picture__img"
          src="@/assets/images/empty-300.jpg"
          alt="image"
      >
    </picture>
    <div class="blogs-item__content blogs-item-content">
      <h2 class="blogs-item-content__title"> {{ blog.name }} </h2>
      <p class="blogs-item-content__subtitle">
        Website:
        <a class="blogs-item-content__link"
           :href="blog.websiteUrl"
           target="_blank"
        >
          {{ blog.websiteUrl }}
        </a>
      </p>
      <p class="blogs-item-content__description">
        {{ blog.description }}
      </p>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})
</script>


<style scoped lang="scss">
@forward "@/components/Blogs/styles/platform-blogs-item";
</style>