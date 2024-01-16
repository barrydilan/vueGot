<template>
  <ListItem>
    <p>{{ name }}</p>
    <p>{{ house }}</p>
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
    house: {
      type: String,
      required: true
    }
  },
  components: { ListItem }
}
</script>
