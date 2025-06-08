<template>
  <router-link class="platform-back-link"
     :to="linkPath"
  >
    <Arrow class="platform-back-link__icon"/>
    <span class="platform-back-link__text"> {{ linkText }} </span>
  </router-link>
</template>

<script setup>
  import Arrow from "@/assets/icons/Arrow.vue";
  defineProps({
    linkText: {
      type: String,
      required: true,
    },
    linkPath: {
      type: String,
      required: true,
    }
  })
</script>

<style scoped lang="scss">
  @forward "@/components/BackLink/styles/platform-back-link";
</style>