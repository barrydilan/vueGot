<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/NavigationList.vue'

</script>

<template>
  <header>
    <Navigation/>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    width: 100%;
  }
</style>
