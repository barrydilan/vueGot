<template>
  <form action="">
    <input type="text" :placeholder="'Search for ' + placeholderText">
    <button type="submit">Search</button>
  </form>
</template>

<script lang="ts">
  export default {
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
    },
  },
  data() {
    return {
      searchValue: '',
      response: '',
    }
  }
}
</script>