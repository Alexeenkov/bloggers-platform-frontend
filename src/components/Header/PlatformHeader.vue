<template>
  <header class="header">
    <RouterLink
        :to="HOME_PAGE_URL"
        class="header__logo"
    >
      Bloggers Platform
    </RouterLink>
  </header>
</template>

<script setup>
import {HOME_PAGE_URL} from "@/constants/paths";
</script>

<style scoped lang="scss">
  @forward "@/components/Header/styles/platform-header";
</style>