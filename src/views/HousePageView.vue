<template>
  <div class="page-wrapper">
    <BackBtn />
    <div class="house-section">
      <img class="img" :src="`../src/assets/img/${houseData?.slug}.png`" :alt="houseData?.slug" />
    </div>
    <PageLink :to="'house'" :slug="houseData?.slug"
      ><h1 class="house-name">{{ houseData?.name }}</h1>
    </PageLink>
    <h3>House members:</h3>
    <ul class="members-list">
      <li v-for="member in houseData.members" :key="member.slug" class="member">
        <PageLink to="'person'" :slug="member.slug">
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
.members-list {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.member {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
