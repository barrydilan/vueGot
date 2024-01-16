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
  border-bottom: 1px solid var(--color-background-tile);
  /* background-color: var(--color-background-tile); */
  text-align: center;
}
li:hover {
  cursor: pointer;
  transform: scale(1.02);
}
</style>
