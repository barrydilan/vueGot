<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

@media (max-width: 968px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
