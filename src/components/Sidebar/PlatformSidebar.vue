<template>
  <aside class="sidebar">
    <div class="sidebar__container">
      <ul class="sidebar-list">
        <li class="sidebar-list-item sidebar-list-item--active">
          <a class="sidebar-list-item-link" href="#">
            <img class="sidebar-list-item-img" src="@/assets/icons/blogs-menu.svg" alt="blogs" />
            <span class="sidebar-list-item-link__caption">Blogs</span>
          </a>
        </li>
        <li class="sidebar-list-item">
          <a class="sidebar-list-item-link" href="#">
            <img class="sidebar-list-item-img" src="@/assets/icons/posts-menu.svg" alt="posts" />
            <span class="sidebar-list-item-link__caption">Posts</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
</script>

<style scoped lang="scss">
  @forward "@/components/Sidebar/styles/platform-sidebar";
</style>