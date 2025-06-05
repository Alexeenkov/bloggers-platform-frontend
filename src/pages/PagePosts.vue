<template>
  <LayoutDefault>
    <template #header>
      <PlatformHeader />
    </template>
    <template #sidebar>
      <PlatformSidebar />
    </template>
    <template #main>
      <PlatformPosts />
    </template>
  </LayoutDefault>
</template>

<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import PlatformHeader from "@/components/Header/PlatformHeader.vue";
import PlatformSidebar from "@/components/Sidebar/PlatformSidebar.vue";
import PlatformPosts from "@/components/Posts/PlatformPosts.vue";
</script>

<style lang="scss">
@use "@/styles/_reset";
@use "@/styles/_fonts";
@use "@/styles/_globals";

#app {
  height: 100%;
}

</style>
