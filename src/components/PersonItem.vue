<template>
  <ListItem>
    <p>
      <PageLink :to="'person'" :slug="props.slug">{{ props.name }}</PageLink>
      <span v-if="props.house"> - {{ props.house }}</span>
    </p>
  </ListItem>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'

const props = defineProps<{
  name: string
  slug: string
  house?: string
}>()
</script>

<style scoped>
span {
  opacity: 0.4;
}
</style>
