<template>
  <section class="wrapper">
    <h2 class="title">{{ sectionTitle }}</h2>
    <div class="content">
      <div class="content_wrapper">
        <form class="search-form" @submit.prevent="getSearchResults">
        <input class="search-input" type="text" :placeholder="'Search for ' + sectionTitle" v-model="searchValue">
        <button class="search-btn" type="submit">Search!</button>
        </form>
        <ul class="content_list">
          <li class="content_list-item">Section content 1</li>
          <li class="content_list-item">Section content 1</li>
          <li class="content_list-item">Section content 1</li>
          <li class="content_list-item">Section content 1</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    getSearchResults() {
      console.log(this.searchValue);
    }
  }
};
</script>


<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
}

.title {
  font-size: 3rem;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-btn {
  height: 2rem;
  font-size: 0.8rem;
  border: none;
}
 
.search-input {
  width: 100%;
  height: 2rem;
  padding: 0.6rem;
  font-size: 0.8rem;
  outline: none;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}

.content_list {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0;
}

.content_list-item {
  font-size: 1.5rem;
}
</style>
