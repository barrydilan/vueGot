<template>
  <div class="page-wrapper">
    <div class="house-section">
      <h2 class="house-name">{{ personData.house?.name }}</h2>
      <img
        class="img"
        :src="`../src/assets/img/${personData.house?.slug}.png`"
        :alt="personData.house?.slug"
      />
    </div>
    <h1>{{ personData?.name }}</h1>
    <p>{{ personData?.quotes }}</p>
  </div>
</template>

<script lang="ts">
import GameOfThronesAPI from '@/services/api'
import type { Character } from '@/types'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const api = new GameOfThronesAPI()
    const personData = ref({} as Character)
    const route = useRoute()
    async function fetchData() {
      const slug = route.params.slug
      const singleSlug = Array.isArray(slug) ? slug[0] : slug
      try {
        const response = await api.getSingleCharacter(singleSlug)
        personData.value = response[0]
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }
    onMounted(() => {
      fetchData()
    })
    return {
      personData
    }
  },
  components: {}
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
}
.house-section {
  max-width: 10%;
}

.img {
  max-width: 100%;
}
</style>
