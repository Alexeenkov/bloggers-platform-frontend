<template>
   <section class="layout-main">
      <div class="layout-main__container">
        <div class="layout-main__header">
          <h1 class="layout-main-title layout-main__title">
            Example
          </h1>
          <div class="layout-main__navigation">
            <slot name="navigation"></slot>
          </div>
        </div>
        <div class="layout-main__inner">
          <slot name="inner" />
        </div>
      </div>
    </section>

</template>

<script setup>
</script>

<style scoped lang="scss">
@forward "@/view/layouts/Main/styles/main-layout";
</style>