<template>
  <div class="layout-default">
    <div class="layout-default__header">
      <slot name="header" />
    </div>
    <div class="layout-default-content layout-default__content">
      <div class="layout-default-content__sidebar">
        <slot name="sidebar" />
      </div>

      <div class="layout-default-content__main">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@forward "@/layouts/styles/layout-default";
</style>