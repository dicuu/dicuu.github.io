<script>
import {useRoute} from 'vue-router'

export default {
    name: 'Navbar',
    setup() {
        const route = useRoute()

        // 定义导航菜单项
        const menuItems = [
            {path: '/', text: 'Home'},
            {path: '/about', text: 'About'},
            {path: '/projects', text: 'Projects'},
            {path: '/research', text: 'Research'},
            {path: '/papers', text: 'Papers'},
            {path: '/awards', text: 'Awards'},
            {path: '/skills', text: 'Skills'},
            {path: '/L', text: 'L'}
        ]

        return {
            route,
            menuItems
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- 导航菜单居中 -->
            <div class="collapse navbar-collapse justify-content-center" id="nav">
                <ul class="navbar-nav">
                    <li v-for="(item, index) in menuItems" :key="index" class="nav-item mx-3">
                        <router-link
                            class="nav-link"
                            :class="{ 'bg-primary text-white rounded-3': route.path === item.path }"
                            :to="item.path"
                        >
                            {{ item.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- 添加分割线 -->
    <hr class="m-0" style="width: 100%; border-color: #dee2e6; opacity: 0.75;"/>
</template>


<style scoped>

</style>
