<template>
  <div class="back-btn" @click="goBack">&larr;</div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack
    }
  }
}
</script>

<style>
.back-btn {
  text-decoration: none;
  position: absolute;
  font-size: 2rem;
  top: 10%;
  left: 10%;
  transition: 0.4s ease;
}

.back-btn:hover {
  cursor: pointer;
  transform: translateX(-5px);
}
</style>
