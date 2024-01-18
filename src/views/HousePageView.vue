<template>
  <div class="page-wrapper">
    <BackBtn />
    <div class="house-section">
      <PageLink :to="'house'" :slug="houseData?.slug"
        ><h1 class="house-name">{{ houseData?.name }}</h1>
      </PageLink>
      <img class="img" :src="getHouseImage(houseData?.slug)" :alt="houseData?.slug" />
    </div>
    <div class="member-section">
      <h3 class="member-title">House members:</h3>
      <ul class="members-list">
        <li v-for="member in houseData.members" :key="member.slug" class="member">
          <PageLink :to="'person'" :slug="member.slug">
            {{ member.name }}
          </PageLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import GameOfThronesAPI from '@/services/api'
import PageLink from '@/components/PageLink.vue'
import BackBtn from '@/components/BackBtn.vue'
import { getHouseImage } from '@/services/imgLoader'
import type { House } from '@/types'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const api = new GameOfThronesAPI()
    const houseData = ref({} as House)
    const getHouseImageRef = ref(getHouseImage)
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
      houseData,
      getHouseImage: getHouseImageRef
    }
  },
  components: { PageLink, BackBtn }
}
</script>

<style scoped>
.page-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4rem;
  padding: 8rem 2rem;
}
.house-section {
  min-width: 12.5rem;
  max-width: 10%;
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

.member-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.member-title {
  font-size: 1.8rem;
  font-weight: bold;
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

@media (max-width: 580px) {
  .page-wrapper {
    flex-direction: column;
  }
}
</style>
