<template>
  <nav class="breadcrumbs">
    <router-link class="breadcrumbs__item breadcrumbs__item--root"
       :to="pageLink"
    >
      {{ pageName }}
    </router-link>

    <IconTriangleArrow
        class="breadcrumbs__separator"
        v-if="subpageName"
    />

    <span
        class="breadcrumbs__item"
        v-if="subpageName"
    >
      {{ subpageName }}
    </span>
  </nav>
</template>

<script setup>
  import IconTriangleArrow from "@/components/Icons/IconTriangleArrow.vue";

  defineProps({
    pageName: {
      type: String,
      required: true
    },
    pageLink: {
      type: String,
      required: true
    },
    subpageName: {
      type: String,
      required: false
    }
  });
</script>

<style scoped lang="scss">
  @forward "@/components/Breadcrumbs/styles/platform-breadcrumbs";
</style>