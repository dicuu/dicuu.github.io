<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
    <div id="app">
        <Navbar/>
        <div class="container mt-4">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: Menlo, Monaco, Consolas, "Courier New", sans-serif;
    line-height: 1.52;
    font-size: 14px;
    padding-top: 20px;
    background-color: #f7f8f9;
}
</style>