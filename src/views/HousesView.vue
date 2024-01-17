<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import SectionItem from '@/components/SectionItem.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import SearchResults from '@/components/SearchResults.vue'
import HouseItem from '@/components/HouseItem.vue'
import GameOfThronesAPI from '../services/api'
import type { House } from '@/types'

const api = new GameOfThronesAPI()
const houses = ref([] as House[])
const searchQuery = ref('')
const isLoading = ref(true)

async function fetchData() {
  try {
    const response = await api.getAllHouses()
    houses.value = response
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

async function handleSearch(query: string) {
  searchQuery.value = query.toLowerCase()
}

const filteredHouses = computed(() => {
  return houses.value.filter((house) => house.name.toLowerCase().includes(searchQuery.value))
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <SectionItem section-title="Houses" :is-loading="isLoading">
    <SearchComponent placeholder-text="Houses" :callback="handleSearch" />
    <div v-if="!filteredHouses.length">Ooops! Nothing Found!</div>
    <SearchResults v-else>
      <HouseItem
        v-for="house in filteredHouses"
        :key="house.name"
        :name="house.name"
        :slug="house.slug"
      />
    </SearchResults>
  </SectionItem>
</template>

<style></style>
