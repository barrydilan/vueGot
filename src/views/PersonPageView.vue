<template>
  <div class="page-wrapper">
    <BackBtn />
    <div class="house-section">
      <PageLink :to="'house'" :slug="personData.house?.slug"
        ><h2 class="house-name">{{ personData.house?.name }}</h2></PageLink
      >
      <img
        class="img"
        :src="`../src/assets/img/${personData.house?.slug}.png`"
        :alt="personData.house?.slug"
      />
    </div>
    <h1 class="person-name">{{ personData?.name }}</h1>
    <SubmitBtn>New Quotes</SubmitBtn>
    <ul>
      <li v-for="quote in personData.quotes" :key="quote">{{ quote }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import GameOfThronesAPI from '@/services/api'
import PageLink from '@/components/PageLink.vue'
import BackBtn from '@/components/BackBtn.vue'
import SubmitBtn from '@/components/SubmitBtn.vue'
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
  components: { PageLink, BackBtn, SubmitBtn }
}
</script>

<style scoped>
.page-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 4rem;
}
.house-section {
  max-width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 1rem;
}

.house-name {
  font-size: 2rem;
}

.img {
  max-width: 100%;
}

.person-name {
  font-size: 3rem;
}
</style>
