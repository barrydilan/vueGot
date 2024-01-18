<template>
  <button class="search-btn" @click="handleClick" :class="{ clicked: isClicked }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

function handleClick() {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 200)
}
</script>

<style scoped>
.search-btn {
  height: 1.5rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}

.search-btn:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 1);
}
.search-btn.clicked {
  background-color: rgba(51, 153, 255, 1);
  transform: scale(0.98);
}
</style>
