<script setup lang="ts">
import HousesView from './HousesView.vue';
import PersonsView from './PersonsView.vue';
import QuotesView from './QuotesView.vue';

</script>

<template>
  <main class="main">
    <div class="grid-item"><HousesView /></div>
    <div class="grid-item"><PersonsView /></div>
    <div class="grid-item"><QuotesView /></div>
  </main>
</template>

<style>
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-item {
  box-sizing: border-box;
}
</style>