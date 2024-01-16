<template>
  <ListItem>
    <p>{{ name }} - <span>{{ person }}</span></p>
  </ListItem>
</template>

<script lang="ts">
import ListItem from '@/components/ListItem.vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    person: {
      type: String,
      required: true,
    }
  },
  components: { ListItem }
}
</script>

<style>
  span {
    opacity: 0.4;
  }
</style>