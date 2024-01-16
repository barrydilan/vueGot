<template>
  <li><slot></slot></li>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
li {
  padding: 0.8rem;
  transition: transform 0.4s ease;
  color: var(--tile-text);
  background-color: var(--color-background-tile);
  text-align: center;
}
li:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
