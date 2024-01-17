<template>
  <section class="wrapper">
    <h2 class="title">{{ sectionTitle }}</h2>
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
    <div v-else class="content">
      <div class="content_wrapper">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      searchValue: ''
    }
  }
}
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
  color: var(--section-heading);
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
  align-items: center;
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

.loading-indicator {
  margin-top: 10rem;
}
</style>
