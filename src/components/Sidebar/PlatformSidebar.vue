<template>
  <aside class="platform-sidebar">
    <ul class="platform-sidebar-list">
      <li class="platform-sidebar-list-item">
        <a class="platform-sidebar-list-item__link platform-sidebar-list-item-link"
           href="#"
        >
          <ListIcon class="platform-sidebar-list-item-link__icon" />
          <span>Blogs</span>
        </a>
      </li>
      <li class="platform-sidebar-list-item platform-sidebar-list-item--active">
        <a class="platform-sidebar-list-item__link platform-sidebar-list-item-link"
           href="#"
        >
          <GridIcon class="platform-sidebar-list-item-link__icon" />
          <span>Posts</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
  import ListIcon from '@/assets/icons/List.vue'
  import GridIcon from '@/assets/icons/Grid.vue'
</script>

<style scoped lang="scss">
  @forward "@/components/Sidebar/styles/platform-sidebar";
</style>