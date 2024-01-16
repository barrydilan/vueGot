<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionItem from '@/components/SectionItem.vue'
import SearchResults from '@/components/SearchResults.vue'
import SubmitBtn from '@/components/SubmitBtn.vue'
import QuoteItem from '@/components/QuoteItem.vue'
import GameOfThronesAPI from '../services/api'
import type { Quote } from '@/types'

const api = new GameOfThronesAPI()
const quotes = ref([] as Quote[])

async function fetchData() {
  try {
    const response = await api.getRandomQuotes(5)
    quotes.value = response
    quotes.value.sort((a, b) => a.sentence.length + b.sentence.length)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <SectionItem section-title="Quotes">
    <SubmitBtn @click="fetchData">Get 5 random quotes!</SubmitBtn>
    <SearchResults>
      <QuoteItem
        v-for="quote in quotes"
        :key="quote.sentence"
        :name="quote.sentence"
        :person="quote.character?.name"
      />
    </SearchResults>
  </SectionItem>
</template>

<style></style>
