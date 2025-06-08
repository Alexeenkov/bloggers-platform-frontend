<!-- TODO: Добавить обёртку в <li> -->
<template>
  <router-link
      class="posts-item"
      to="post"
  >
    <picture class="posts-item__picture posts-item-picture">
      <img
          class="posts-item-picture__img"
          src="@/assets/images/test.jpg"
          alt="image"
          loading="lazy"
      >
    </picture>
    <div class="posts-item-body">
      <a
          class="posts-item-body__picture posts-item-body-picture"
          href="https://youtube.com/"
      >
        <img
            class="posts-item-body-picture__img"
            src="@/assets/images/test.jpg"
            alt="author"
            loading="lazy"
        >
      </a>
      <div class="posts-item-body__content">
        <h2 class="posts-item-body__title"> {{ postData.title }} </h2>
        <p class="posts-item-body__description"> {{ postData.shortDescription }} </p>
        <p class="posts-item-body__date"> {{ getDateFromString(postData.createdAt) }} </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  postData: {
    type: Object,
    required: true
  }
});

const getDateFromString = (string) => {
  return new Date(string).toLocaleDateString('ru-RU');
}

</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts-item";
</style>