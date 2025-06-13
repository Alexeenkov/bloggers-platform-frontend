<template>
  <button class="button-more">
    <span class="button-more__text">Show more</span>
    <IconDropdownArrow class="button-more__icon"/>
  </button>
</template>

<script setup>
  import IconDropdownArrow from "@/components/Icons/IconDropdownArrow.vue";
</script>

<style scoped lang="scss">
  @forward "@/components/ButtonMore/styles/platform-button-more";
</style>