<template>
  <aside class="sidebar">
      <div
          class="sidebar__item sidebar-item"
          :class="{ 'sidebar-item--active' : blogs.path === currentPath }"
      >
        <RouterLink class="sidebar-item__link sidebar-item-link"
           :to="blogs.path"
        >
          <IconList class="sidebar-item-link__icon" />
          <span>{{ blogs.text }}</span>
        </RouterLink>
      </div>
      <div
          class="sidebar__item sidebar-item"
          :class="{ 'sidebar-item--active' : posts.path === currentPath }">
        <RouterLink
            class="sidebar-item__link sidebar-item-link"
            :to="posts.path"
        >
          <IconGrid class="sidebar-item-link__icon" />
          <span>{{ posts.text }}</span>
        </RouterLink>
      </div>
  </aside>
</template>

<script setup>
  import IconList from '@/components/Icons/IconList.vue'
  import IconGrid from '@/components/Icons/IconGrid.vue'
  import {ref} from "vue";
  import {useRoute} from "vue-router";
  import {BLOGS_PAGE_URL, POSTS_PAGE_URL} from "@/constants/paths";

  const currentPath = ref(useRoute().path);

  const blogs = {
    text: 'Blogs',
    path: BLOGS_PAGE_URL,
  };

  const posts = {
    text: 'Posts',
    path: POSTS_PAGE_URL,
  };

</script>

<style scoped lang="scss">
  @forward "@/components/Sidebar/styles/platform-sidebar";
</style>