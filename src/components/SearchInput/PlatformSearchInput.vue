<template>
  <div class="search">
    <SearchIcon class="search-icon search__icon"/>
    <input
        class="search-input"
        name="search"
        placeholder="Search"
        type="text" />
  </div>
</template>

<script setup>
import SearchIcon from '@/assets/icons/Search.vue';
</script>


<style scoped lang="scss">
@forward "@/components/SearchInput/styles/platform-search-input";
</style>