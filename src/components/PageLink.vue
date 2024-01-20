<template>
  <router-link :to="`/${props.to}/${props.slug}`" class="link">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  slug: string
}>()
</script>

<style>
.link {
  text-decoration: underline rgba(0, 0, 0, 0);
  transition: 0.4s ease-in-out;
  text-decoration-skip-ink: auto;
}

.link:hover {
  text-decoration: underline rgba(0, 0, 0, 1);
  text-decoration-thickness: 0.1;
}
</style>
