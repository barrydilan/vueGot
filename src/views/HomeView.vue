<script setup lang="ts">
import HousesView from './HousesView.vue'
import PersonsView from './PersonsView.vue'
import QuotesView from './QuotesView.vue'
</script>

<template>
  <main class="main">
    <HousesView />
    <PersonsView />
    <QuotesView />
  </main>
</template>

<style>
.main {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  max-width: 75rem;
  margin: 0 auto;
}

@media (max-width: 580px) {
  .main {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
