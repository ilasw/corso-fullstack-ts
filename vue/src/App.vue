<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import Header from './components/Header.vue';
  import CatFacts from './components/CatFacts.vue';
  import NamesForm from './components/NamesForm.vue';

  // Children 
  // Direttive
</script>

<template>
  <Header />
  <!-- <CatFacts /> -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
