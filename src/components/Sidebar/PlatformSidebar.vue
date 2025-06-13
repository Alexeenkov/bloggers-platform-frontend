<template>
  <aside class="sidebar">
      <div
          class="sidebar__item sidebar-item"
          :class="{ 'sidebar-item--active' : blogs.path === currentPath }"
      >
        <router-link class="sidebar-item__link sidebar-item-link"
           :to="blogs.path"
        >
          <ListIcon class="sidebar-item-link__icon" />
          <span>{{ blogs.text }}</span>
        </router-link>
      </div>
      <div
          class="sidebar__item sidebar-item"
          :class="{ 'sidebar-item--active' : posts.path === currentPath }">
        <router-link
            class="sidebar-item__link sidebar-item-link"
            :to="posts.path"
        >
          <GridIcon class="sidebar-item-link__icon" />
          <span>{{ posts.text }}</span>
        </router-link>
      </div>
  </aside>
</template>

<script setup>
  import ListIcon from '@/assets/icons/List.vue'
  import GridIcon from '@/assets/icons/Grid.vue'
  import {ref} from "vue";
  import {useRoute} from "vue-router";

  const currentPath = ref(useRoute().path);

  const blogs = {
    text: 'Blogs',
    path: '/bloggers-platform-frontend/blogs',
  };

  const posts = {
    text: 'Posts',
    path: '/bloggers-platform-frontend/posts',
  };

</script>

<style scoped lang="scss">
  @forward "@/components/Sidebar/styles/platform-sidebar";
</style>