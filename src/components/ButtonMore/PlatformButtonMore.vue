<template>
  <button class="button-more">
    <span class="button-more__text">Show more</span>
    <DropdownArrow class="button-more__icon"/>
  </button>
</template>

<script setup>
  import DropdownArrow from "@/assets/icons/DropdownArrow.vue";
</script>

<style scoped lang="scss">
  @forward "@/components/ButtonMore/styles/platform-button-more";
</style>