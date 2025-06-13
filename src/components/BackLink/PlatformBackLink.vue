<template>
  <RouterLink class="platform-back-link"
     :to="linkPath"
  >
    <IconArrow class="platform-back-link__icon"/>
    <span class="platform-back-link__text"> {{ linkText }} </span>
  </RouterLink>
</template>

<script setup>
  import IconArrow from "@/components/Icons/IconArrow.vue";
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