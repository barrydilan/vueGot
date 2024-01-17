<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import SectionItem from '@/components/SectionItem.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import SearchResults from '@/components/SearchResults.vue'
import PersonItem from '@/components/PersonItem.vue'
import GameOfThronesAPI from '../services/api'
import type { Character } from '@/types'

const api = new GameOfThronesAPI()
const persons = ref([] as Character[])
const searchQuery = ref('')

async function fetchData() {
  try {
    const response = await api.getAllCharacters()
    persons.value = response
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

async function handleSearch(query: string) {
  searchQuery.value = query.toLowerCase();
}

const filteredPersons = computed(() => {
  return persons.value.filter(person => person.name.toLowerCase().includes(searchQuery.value))
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <SectionItem section-title="Persons">
    <SearchComponent placeholder-text="Persons" :callback="handleSearch" />
    <SearchResults>
        <PersonItem
        v-for="person in filteredPersons"
        :key="person.name"
        :name="person.name"
        :slug="person.slug"
        :house="person.house?.name"
      />
    </SearchResults>
  </SectionItem>
</template>

<style></style>
