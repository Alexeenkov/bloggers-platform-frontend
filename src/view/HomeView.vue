<template>
  <PlatformHeader />
  <main class="container">
    <PlatformSidebar class="container__sidebar" />
    <MainLayout>
      <template #navigation>
        <SearchInput />
      </template>
      <template #inner>
        <BlogList />
      </template>
    </MainLayout>
  </main>
</template>

<script setup>
import PlatformHeader from "@/components/Header/PlatformHeader.vue";
import PlatformSidebar from "@/components/Sidebar/PlatformSidebar.vue";
import MainLayout from "@/view/layouts/Main/MainLayout.vue";
import SearchInput from "@/components/SearchInput/SearchInput.vue";
import BlogList from "@/components/Blogs/BlogList.vue";
import PostList from "@/components/Posts/PostList.vue";
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
