<script>
import Navbar from './components/Navbar.vue';

export default {
    name: "App",
    components: {
        Navbar
    },
    data() {
        return {
            customMenuItems: [
                {path: '/', text: 'Home'},
                {path: '/about', text: 'About'},
                {path: '/projects', text: 'Projects'},
                {path: '/research', text: 'Research'},
                {path: '/papers', text: 'Papers'},
                {path: '/awards', text: 'Awards'},
                {path: '/skills', text: 'Skills'}
            ]
        }
    }
}
</script>

<template>
    <div class="mx-2">
        <Navbar :menuItems="customMenuItems"/>
        <div class="container mt-4">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>

</style>