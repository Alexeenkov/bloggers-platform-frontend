<template>
  <!-- TODO: Изменить на <ul> -->
  <section class="posts-list">
    <div class="posts-list__wrapper">
      <PlatformPostsItem
        v-for="post in posts.items"
        :key="post.id"
        :post="post"
      />
    </div>

    <div class="posts-list__footer">
      <PlatformButtonListMore />
    </div>
  </section>
</template>

<script setup>
import PlatformPostsItem from "@/components/Posts/PlatformPostsItem.vue";
import PlatformButtonListMore from "@/components/ButtonListMore/PlatformButtonListMore.vue";
import posts from "@/mocks/posts.json";

posts.items.map(post => {
  post.createdAtStr = new Date(post.createdAt).toLocaleDateString('ru-RU');
})

</script>


<style scoped lang="scss">
@forward "@/components/Posts/styles/platform-posts-list";
</style>