<template>
  <div class="search">
    <SearchIcon class="search__icon"/>
    <input
        class="search__input"
        name="search"
        placeholder="Search"
        type="text" />
  </div>
</template>

<script setup>
  import SearchIcon from '@/assets/icons/Search.vue';
</script>


<style scoped lang="scss">
  @forward "@/components/Search/styles/platform-search";
</style>