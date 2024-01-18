<template>
  <ListItem>
    <PageLink :to="'house'" :slug="slug">
      <div class="house-item">
        <p>{{ props.name }}</p>
        <div class="img-container">
          <img class="img" :src="getHouseImage(props.slug)" :alt="props.slug" />
        </div>
      </div>
    </PageLink>
  </ListItem>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import PageLink from '@/components/PageLink.vue'

import starkImg from '@/assets/img/stark.png'
import arrynImg from '@/assets/img/arryn.png'
import baratheonImg from '@/assets/img/arryn.png'
import baelishImg from '@/assets/img/baelish.png'
import boltonImg from '@/assets/img/bolton.png'
import greyjoyImg from '@/assets/img/greyjoy.png'
import lannisterImg from '@/assets/img/lannister.png'
import martellImg from '@/assets/img/martell.png'
import targaryenImg from '@/assets/img/targaryen.png'
import tarlyImg from '@/assets/img/tarly.png'
import tarthImg from '@/assets/img/tarth.png'
import tullyImg from '@/assets/img/tully.png'
import tyrellImg from '@/assets/img/tyrell.png'

const getHouseImage = (slug: string) => {
  switch (slug) {
    case 'stark':
      return starkImg
    case 'arryn':
      return arrynImg
    case 'baelish':
      return baelishImg
    case 'bolton':
      return boltonImg
    case 'baratheon':
      return baratheonImg
    case 'greyjoy':
      return greyjoyImg
    case 'lannister':
      return lannisterImg
    case 'martell':
      return martellImg
    case 'targaryen':
      return targaryenImg
    case 'tarly':
      return tarlyImg
    case 'tarth':
      return tarthImg
    case 'tully':
      return tullyImg
    case 'tyrell':
      return tyrellImg
    default:
      return ''
  }
}

const props = defineProps<{
  name: string
  slug: string
}>()
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
  max-width: 6.25rem;
  max-height: 6.25rem;
}

.img {
  max-width: 100%;
  max-height: 100%;
}
</style>
