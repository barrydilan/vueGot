<template>
  <ListItem>
    <div class="house-item">
      <PageLink :to="'house'" :slug="slug">
        <p>{{ name }}</p>
      </PageLink>
      <div class="img-container">
        <img class="img" :src="`src/assets/img/${slug}.png`" :alt="slug" />
      </div>
    </div>
  </ListItem>
</template>

<script lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  components: { ListItem, PageLink }
}
</script>

<style scoped>
.house-item {
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.img-container {
  max-width: 100px;
  max-height: 100px;
}

.img {
  max-width: 100%;
  max-height: 100%;
}
</style>
