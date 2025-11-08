<script>
import {useRoute} from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


export default {
    name: 'Navbar',
    props: {
        menuItems: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const route = useRoute()
        return {
            route
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- 添加导航切换按钮 -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                    aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- 导航菜单居中 -->
            <div class="collapse navbar-collapse justify-content-center" id="nav">
                <ul class="navbar-nav">
                    <li v-for="(item, index) in menuItems" :key="index" class="nav-item mx-3">
                        <router-link
                            class="nav-link"
                            :class="{ 'bg-primary text-white rounded-3': route.path === item.path }"
                            :to="item.path">
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
