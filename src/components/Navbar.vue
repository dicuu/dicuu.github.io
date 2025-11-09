<script>
import {useRouter, useRoute} from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
    name: 'Navbar',
    props: {
        menuItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            router: null
        }
    },
    computed: {
        route() {
            return useRoute()
        }
    },
    mounted() {
        // 获取router实例
        this.router = useRouter()

        // 动态设置占位元素高度
        const navbar = document.querySelector('.navbar')
        if (navbar) {
            const navbarHeight = navbar.offsetHeight
            const placeholder = document.querySelector('.navbar-placeholder')
            if (placeholder) {
                placeholder.style.height = navbarHeight + 'px'
            }
        }
    },
    methods: {
        handleMenuClick(path) {
            if (this.router) {
                this.router.push(path)
            }
        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1">
        <div class="container-fluid">
            <!-- 左侧标题 -->
            <a class="navbar-brand fw-semibold ms-2" href="#">Yatao Li</a>

            <!-- 移动端按钮 -->
            <button class="navbar-toggler mb-1"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                    aria-controls="nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon m-0"></span>
            </button>

            <!-- 菜单内容 -->
            <div class="collapse navbar-collapse justify-content-end p-2" id="nav">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li v-for="(item, index) in menuItems"
                        :key="index"
                        class="nav-item mx-1">
                        <a class="nav-link px-3"
                           :class="{ 'fw-bold text-white': route.path === item.path }"
                           href="javascript:void(0)"
                           @click="handleMenuClick(item.path)"
                           data-bs-toggle="collapse"
                           data-bs-target=".navbar-collapse.show">
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- 添加占位元素 -->
    <div class="navbar-placeholder" style="height: 60px;"></div>
</template>
