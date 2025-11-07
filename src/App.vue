<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>