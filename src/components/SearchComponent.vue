<template>
  <form action="" class="search-form">
    <input class="search-input" type="search" :placeholder="'Search for ' + placeholderText"
 />
    <button class="search-btn" type="submit">Search</button>
  </form>
</template>

<script lang="ts">
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
}
</script>

<style>
  .search-input {
    border: none;
    height: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .search-btn {
    height: 1.5rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }

  .search-btn:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 1);
  }

</style>
