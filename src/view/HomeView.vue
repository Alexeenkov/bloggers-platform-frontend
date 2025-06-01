<template>
  <LayoutMain>
    <template #header>
      <PlatformHeader />
    </template>
    <template #content>
      <PlatformSidebar />
      <LayoutList>
        <template #navigation>
          <PlatformSearchInput />
        </template>
        <template #content>
          <PlatformBlogList />
<!--          <PlatformPostList />-->
        </template>
      </LayoutList>
    </template>
  </LayoutMain>
</template>

<script setup>
import PlatformHeader from "@/components/Header/PlatformHeader.vue";
import LayoutMain from "@/view/layouts/Page/LayoutPage.vue";
import PlatformPostList from "@/components/Posts/PlatformPostList.vue";
import PlatformBlogList from "@/components/Blogs/PlatformBlogList.vue";
import PlatformSidebar from "@/components/Sidebar/PlatformSidebar.vue";
import LayoutList from "@/view/layouts/List/LayoutList.vue";
import PlatformSearchInput from "@/components/SearchInput/PlatformSearchInput.vue";
</script>

<style lang="scss">
@use "@/styles/_reset";
@use "@/styles/_fonts";
@use "@/styles/_globals";

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
