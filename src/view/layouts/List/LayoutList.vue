<template>
  <section class="layout-list">
    <h1 class="layout-list-title layout-list__title">
      Example
    </h1>
    <div class="layout-list__container">
      <div class="layout-list-navigation layout-list__navigation">
        <slot name="navigation" />
      </div>
      <div class="layout-list__content">
        <slot name="content" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
@forward "@/view/layouts/List/styles/layout-list";
</style>