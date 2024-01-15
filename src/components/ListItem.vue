<template>
  <li>{{ name }}</li>
</template>

<script lang="ts">

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  }
};
</script>
