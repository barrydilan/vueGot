<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionItem from '@/components/SectionItem.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import SearchResults from '@/components/SearchResults.vue'
import ListItem from '@/components/ListItem.vue'
import GameOfThronesAPI from '../services/api'
import type { House } from '@/types'

const requester = new GameOfThronesAPI()
const houses = ref([] as House[])

async function fetchData() {
  try {
    const response = await requester.getAllHouses()
    houses.value = response
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <SectionItem section-title="Houses">
    <SearchComponent placeholder-text="Houses" />
    <SearchResults>
      <ListItem v-for="house in houses" :key="house.name" :name="house.name" />
    </SearchResults>
  </SectionItem>
</template>

<style></style>
