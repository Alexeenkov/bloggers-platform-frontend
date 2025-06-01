<template>
  <div class="layout-page">
    <slot name="header"></slot>
    <div class="layout-page__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@forward "@/view/layouts/Page/styles/layout-page";
</style>