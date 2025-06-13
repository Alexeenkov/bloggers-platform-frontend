<template>
  <div class="search">
    <IconSearch class="search__icon"/>
    <input
        class="search__input"
        name="search"
        placeholder="Search"
        type="text" />
  </div>
</template>

<script setup>
  import IconSearch from '@/components/Icons/IconSearch.vue';
</script>


<style scoped lang="scss">
  @forward "@/components/Search/styles/platform-search";
</style>