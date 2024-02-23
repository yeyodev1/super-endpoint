<script setup>
import { computed, onMounted } from 'vue';

import useGenericDataStore from '@/store/genericDataStore';

const dataStore = useGenericDataStore();

const posts = computed(() => dataStore.posts);
const isLoading = computed(() => dataStore.isLoading);

onMounted(async () => {
  try {
    await dataStore.fetchPosts(); 
  } catch (error) {
    console.error('error getting posts: ', error);
  }
});
</script>

<template>
  <div>
    <h1>Estoy aprendiendo a usar endpoints como un profesional</h1>
    <div v-if="isLoading">
      Cargando posts...
    </div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
