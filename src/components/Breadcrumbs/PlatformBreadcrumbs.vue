<template>
  <nav class="breadcrumbs">
      <RouterLink
          v-if="items[0].link"
          :to="items[0].link"
          class="breadcrumbs__item breadcrumbs__item--root"
      >
        {{ items[0].name }}
      </RouterLink>

      <h1
          v-else
          class="breadcrumbs__item breadcrumbs__item--root"
      >
        {{ items[0].name }}
      </h1>

    <template v-if="items[1]">
      <IconTriangleArrow class="breadcrumbs__separator" />

      <span class="breadcrumbs__item">
        {{ items[1].name }}
      </span>
    </template>
  </nav>
</template>

<script setup>
  import IconTriangleArrow from "@/components/Icons/IconTriangleArrow.vue";

  defineProps({
    items: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  @forward "@/components/Breadcrumbs/styles/platform-breadcrumbs";
</style>