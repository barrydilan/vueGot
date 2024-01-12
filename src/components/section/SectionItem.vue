<template>
  <div class="wrapper">
    <h2 class="title">{{sectionTitle}}</h2>
    <div class="content">
      <ul class="content_list">
        <li class="content_list-item">Section content 1</li>
        <li class="content_list-item">Section content 1</li>
        <li class="content_list-item">Section content 1</li>
        <li class="content_list-item">Section content 1</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    }
  },
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
