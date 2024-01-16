<template>
  <form action="" class="search-form" @submit.prevent>
    <input class="search-input" type="search" :placeholder="'Search for ' + placeholderText" />
    <SubmitBtn type="submit">Search</SubmitBtn>
  </form>
</template>

<script lang="ts">
import SubmitBtn from '@/components/SubmitBtn.vue';
export default {
  props: {
    placeholderText: {
      type: String,
      required: true
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      searchValue: '',
      response: ''
    }
  },
  components: {SubmitBtn}
}
</script>

<style>
.search-input {
  border: none;
  height: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
