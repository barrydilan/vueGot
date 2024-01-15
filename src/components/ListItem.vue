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
  padding: 0.4rem;
  color: white;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  background-color: #343434;
  transition: background-color 0.3s ease;
  text-align: center;
}
</style>
