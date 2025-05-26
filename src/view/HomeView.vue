<template>
  <PlatformHeader />
  <main class="container">
    <PlatformSidebar class="container__sidebar" />
    <MainLayout>
      <template #navigation>
        <PlatformSearchInput />
      </template>
      <template #inner>
        <PlatformBlogList />
      </template>
    </MainLayout>
  </main>
</template>

<script setup>
import PlatformHeader from "@/components/Header/PlatformHeader.vue";
import PlatformSidebar from "@/components/Sidebar/PlatformSidebar.vue";
import MainLayout from "@/view/layouts/Main/MainLayout.vue";
import PlatformSearchInput from "@/components/SearchInput/PlatformSearchInput.vue";
import PlatformBlogList from "@/components/Blogs/PlatformBlogList.vue";
</script>

<style lang="scss">
@use "@/styles/_normalize";
@use "@/styles/_fonts";

#app {
  height: 100%;
}

.container {
  display: flex;
  height: 100%;

  &__sidebar {
    flex-shrink: 0;
  }
}
</style>
