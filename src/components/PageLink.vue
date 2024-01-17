<template>
  <router-link :to="`/${to}/${slug}`" class="link">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
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
