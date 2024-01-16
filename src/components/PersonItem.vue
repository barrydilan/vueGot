<template>
  <ListItem>
    <p>
      {{ name }}
      <span v-if="house"> - {{ house }}</span>
    </p>
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

<style scoped>
span {
  opacity: 0.4;
}
</style>
