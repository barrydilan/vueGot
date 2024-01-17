<template>
  <router-link :to="`/${to}/${slug}`">
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
