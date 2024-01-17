<template>
  <ListItem>
    <PageLink :to="'house'" :slug="slug">
      <div class="house-item">
        <p>{{ props.name }}</p>
        <div class="img-container">
          <img class="img" :src="imagePath" :alt="props.slug" />
        </div>
      </div>
    </PageLink>
  </ListItem>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'
import { ref } from 'vue'

const props = defineProps<{
  name: string
  slug: string
}>()

const imagePath = ref<string>('')

import('../assets/img/' + props.slug + '.png')
  .then((module) => {
    imagePath.value = module.default
  })
  .catch((error) => {
    console.error('Error loading image:', error)
  })
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
  max-width: 100px;
  max-height: 100px;
}

.img {
  max-width: 100%;
  max-height: 100%;
}
</style>
