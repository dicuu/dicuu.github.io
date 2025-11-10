<script>
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "App",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            buttonText: 'Next',
            router: null
        }
    },
    computed: {
        customMenuItems() {
            // 使用 useRouter 获取 router 实例
            const router = useRouter();
            // 根据路由配置动态生成菜单项
            return router.options.routes
                .filter(route => route.meta && route.meta.menu)
                .map(route => ({
                    path: route.path,
                    text: route.meta.title || route.name
                }));
        }
    },
    methods: {
        goToNextRoute() {
            if (this.router){
                const currentPath = this.$route.path;
                const menuItems = this.customMenuItems;
                const currentIndex = menuItems.findIndex(item => item.path === currentPath);

                if (currentIndex < menuItems.length - 1) {
                    // 不是最后一个，跳转到下一个路由
                    this.router.push(menuItems[currentIndex + 1].path);
                } else {
                    // 是最后一个，返回首页
                    this.router.push('/');
                }
            }
        }
    },
    watch: {
        $route() {
            // 监听路由变化，更新按钮文本
            const currentIndex = this.customMenuItems.findIndex(item => item.path === this.$route.path);
            if (currentIndex >= 0) {
                this.buttonText = currentIndex < this.customMenuItems.length - 1 ? 'Next' : 'Back to Home';
            }
        }
    },
    mounted() {
        // 获取router实例
        this.router = useRouter();
    },
}
</script>

<template>
    <Navbar :menuItems="customMenuItems"/>
    <div class="container mt-4">
        <router-view/>
        <!-- 添加 Next 按钮 -->
        <div class="text-center my-4 d-md-none">
            <button
                class="btn btn-dark w-50"
                @click="goToNextRoute">
                {{ buttonText }}
            </button>
        </div>
    </div>
    <Footer />
</template>

<style scoped>

</style>