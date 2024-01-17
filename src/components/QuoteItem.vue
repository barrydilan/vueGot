<template>
  <ListItem>
    <p>{{ props.name }}</p>
    <PageLink :to="'person'" :slug="props.slug">
      <span>{{ props.person }}</span>
    </PageLink>
  </ListItem>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'

const props = defineProps<{
  name: string
  person: string
  slug: string
}>()
</script>

<style scoped>
span {
  opacity: 0.4;
}
</style>
