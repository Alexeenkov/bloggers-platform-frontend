<template>
  <a class="platform-back-link"
     href="#"
  >
    <ArrowLeft class="platform-back-link__icon"/>
    <span class="platform-back-link__text">Back to blogs</span>
  </a>
</template>

<script setup>
  import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
</script>

<style scoped lang="scss">
  @forward "@/components/BackLink/styles/platform-back-link";
</style>