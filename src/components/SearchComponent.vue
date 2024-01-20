<template>
  <form action="" class="search-form" @submit.prevent="search">
    <input
      class="search-input"
      v-model="searchValue"
      type="search"
      :placeholder="'Search for ' + props.placeholderText"
    />
    <SubmitBtn type="submit">Search</SubmitBtn>
  </form>
</template>

<script setup lang="ts">
import SubmitBtn from '@/components/SubmitBtn.vue'
import { ref } from 'vue'

const props = defineProps<{
  placeholderText: string
  callback: (value: string) => void
}>()

const searchValue = ref('')
const search = () => {
  props.callback(searchValue.value)
}
</script>

<style>
.search-input {
  border: none;
  height: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
