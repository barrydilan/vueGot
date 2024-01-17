<template>
  <ListItem>
    <p>
      <PageLink :to="'person'" :slug="slug">{{ name }}</PageLink>
      <span v-if="house"> - {{ house }}</span>
    </p>
  </ListItem>
</template>

<script lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    house: {
      type: String,
      required: true
    }
  },
  components: { ListItem, PageLink }
}
</script>

<style scoped>
span {
  opacity: 0.4;
}
</style>
