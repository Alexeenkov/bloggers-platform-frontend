<template>
  <aside class="sidebar">
      <div class="sidebar__item sidebar-item">
        <a class="sidebar-item__link sidebar-item-link"
           href="#"
        >
          <ListIcon class="sidebar-item-link__icon" />
          <span>Blogs</span>
        </a>
      </div>
      <div class="sidebar__item sidebar-item sidebar-item--active">
        <a class="sidebar-item__link sidebar-item-link"
           href="#"
        >
          <GridIcon class="sidebar-item-link__icon" />
          <span>Posts</span>
        </a>
      </div>
  </aside>
</template>

<script setup>
  import ListIcon from '@/assets/icons/List.vue'
  import GridIcon from '@/assets/icons/Grid.vue'
</script>

<style scoped lang="scss">
  @forward "@/components/Sidebar/styles/platform-sidebar";
</style>