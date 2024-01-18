<template>
  <ListItem>
    <PageLink :to="'house'" :slug="slug">
      <div class="house-item">
        <p>{{ props.name }}</p>
        <div class="img-container">
          <img class="img" :src="getHouseImage(props.slug)" :alt="props.slug" />
        </div>
      </div>
    </PageLink>
  </ListItem>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'
import { getHouseImage } from '@/services/imgLoader'

const props = defineProps<{
  name: string
  slug: string
}>()
</script>

<style scoped>
.house-item {
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.img-container {
  max-width: 6.25rem;
  max-height: 6.25rem;
}

.img {
  max-width: 100%;
  max-height: 100%;
}
</style>
