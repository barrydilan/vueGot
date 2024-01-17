<template>
  <div class="page-wrapper">
    <BackBtn />
    <div class="house-section">
      <img class="img" :src="`../src/assets/img/${houseData?.slug}.png`" :alt="houseData?.slug" />
      <PageLink :to="'house'" :slug="houseData?.slug"
        ><h1 class="house-name">{{ houseData?.name }}</h1>
      </PageLink>
    </div>
    <h3 class="section-title">House members:</h3>
    <ul class="members-list">
      <li v-for="member in houseData.members" :key="member.slug" class="member">
        <PageLink :to="'person'" :slug="member.slug">
          {{ member.name }}
        </PageLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import GameOfThronesAPI from '@/services/api'
import PageLink from '@/components/PageLink.vue'
import BackBtn from '@/components/BackBtn.vue'
import type { House } from '@/types'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const api = new GameOfThronesAPI()
    const houseData = ref({} as House)
    const route = useRoute()
    async function fetchData() {
      const slug = route.params.slug
      const singleSlug = Array.isArray(slug) ? slug[0] : slug
      try {
        const response = await api.getSingleHouse(singleSlug)
        houseData.value = response[0]
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }
    onMounted(() => {
      fetchData()
    })
    return {
      houseData
    }
  },
  components: { PageLink, BackBtn }
}
</script>

<style scoped>
.page-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 4rem 2rem;
}
.house-section {
  min-width: 200px;
  max-width: 25%;
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

.section-title {
  font-size: 1.4rem;
  opacity: 0.8;
}
.members-list {
  display: grid;
  text-align: center;
  gap: 2rem;
}

.member {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
