<template>
  <li>{{ name }}</li>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  padding: 0.8rem;
  color: var(--tile-text);
  background-color: var(--color-background-tile);
  transition: background-color 0.3s ease;
  text-align: center;
}
</style>
