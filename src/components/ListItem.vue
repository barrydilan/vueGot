<template>
  <li><slot></slot></li>
</template>

<script setup lang="ts"></script>

<style scoped>
li {
  padding: 0.8rem;
  transition: transform 0.4s ease;
  color: var(--tile-text);
  border-bottom: 1px solid var(--color-background-tile);
  text-align: center;
}
li:hover {
  cursor: pointer;
}
</style>
