<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SectionItem from "@/components/SectionItem.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ListItem from "@/components/ListItem.vue";
import GameOfThronesAPI from "../services/api";
import type { Character } from "@/types";

const requester = new GameOfThronesAPI();
const persons = ref([] as Character[]);

async function fetchData() {
  try {
    const response = await requester.getAllCharacters();
    persons.value = response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <SectionItem section-title="Persons">
    <SearchComponent placeholder-text="Persons" />
    <ul>
      <ListItem v-for="person in persons" :key="person.name" :name="person.name"/>
    </ul>
  </SectionItem>
</template>

<style>
</style>