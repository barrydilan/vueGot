<template>
  <div class="page-wrapper">
    <BackBtn />
    <div v-if="personData.house" class="house-section">
      <PageLink :to="'house'" :slug="personData.house?.slug"
        ><h2 class="house-name">{{ personData.house?.name }}</h2></PageLink
      >
      <img class="img" :src="getHouseImage(personData.house?.slug)" :alt="personData.house?.slug" />
    </div>
    <div class="quotes-section">
      <h1 class="person-name">{{ personData?.name }}</h1>
      <SubmitBtn @click="loadNextQuotes">New Quotes</SubmitBtn>
      <ul class="quotes-list">
        <li class="quote" v-for="quote in displayedQuotes" :key="quote">{{ quote }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import GameOfThronesAPI from '@/services/api'
import PageLink from '@/components/PageLink.vue'
import BackBtn from '@/components/BackBtn.vue'
import SubmitBtn from '@/components/SubmitBtn.vue'
import { getHouseImage } from '@/services/imgLoader'
import type { Character } from '@/types'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const QUOTES_TO_SHOW = 2

export default {
  setup() {
    const api = new GameOfThronesAPI()
    const personData = ref({} as Character)
    const getHouseImageRef = ref(getHouseImage)
    const route = useRoute()
    const displayedQuotes = ref([] as string[])
    let currentQuoteIndex = ref(0)
    const quotesToShow = ref(QUOTES_TO_SHOW)

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

    function loadNextQuotes() {
      updateDisplayedQuotes()
    }

    function updateDisplayedQuotes() {
      const initialLength = personData.value.quotes.length
      const quotes = personData.value.quotes
      let startIndex = currentQuoteIndex.value
      if (startIndex >= initialLength) {
        startIndex = 0
        currentQuoteIndex.value = 0
      }
      const endIndex = currentQuoteIndex.value + quotesToShow.value
      currentQuoteIndex.value += quotesToShow.value
      displayedQuotes.value = quotes.slice(startIndex, endIndex)
    }

    onMounted(() => {
      fetchData()
    })

    watch(personData, () => {
      updateDisplayedQuotes()
    })

    return {
      personData,
      loadNextQuotes,
      displayedQuotes,
      getHouseImage: getHouseImageRef
    }
  },
  components: { PageLink, BackBtn, SubmitBtn }
}
</script>

<style>
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
  flex: 1;
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

.person-name {
  font-size: 3rem;
}

.quotes-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quotes-list {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-style: italic;
}

@media (max-width: 580px) {
  .page-wrapper {
    flex-direction: column;
  }
}
</style>
