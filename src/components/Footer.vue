<script>
export default {
    name: "Footer",
    mounted() {
        this.adjustFooter()
        window.addEventListener('resize', this.adjustFooter)
        window.addEventListener('orientationchange', this.adjustFooter)
        window.addEventListener('load', this.adjustFooter)

        // 监听 DOM 内容变化（异步加载内容）
        this._observer = new MutationObserver(() => {
            if (this._moRAF) cancelAnimationFrame(this._moRAF)
            this._moRAF = requestAnimationFrame(() => this.adjustFooter())
        })
        this._observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.adjustFooter)
        window.removeEventListener('orientationchange', this.adjustFooter)
        window.removeEventListener('load', this.adjustFooter)
        if (this._observer) this._observer.disconnect()
        if (this._moRAF) cancelAnimationFrame(this._moRAF)
    },
    methods: {
        adjustFooter() {
            const footer = document.getElementById('footer')
            const placeholder = this.$refs.placeholder
            if (!footer || !placeholder) return

            // 为测量准确，先把 footer 设为 static
            footer.style.position = 'static'
            footer.style.bottom = 'auto'
            footer.style.transform = 'none'

            const totalHeight = document.body.scrollHeight
            const viewportHeight = window.innerHeight
            const footerHeight = footer.getBoundingClientRect().height


            if (totalHeight <= viewportHeight) {
                // 内容不足一屏 → 固定 footer
                footer.style.position = 'fixed'
                footer.style.left = '0'
                footer.style.bottom = '0'
                footer.style.width = '100vw'
                // ✅ iOS Safari 安全区抬起 footer 避免黑条
                footer.style.transform = 'translateY(-env(safe-area-inset-bottom))'
                placeholder.style.height = footerHeight + 'px'
            } else {
                // 内容多 → footer 跟随内容
                footer.style.position = 'static'
                footer.style.transform = 'none'
                placeholder.style.height = '0'
            }
        }
    }
}
</script>

<template>
    <div class="footer-placeholder" ref="placeholder" style="height: 0;"></div>
    <footer id="footer" class="bg-dark text-secondary py-3">
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12 text-center" style="font-size: smaller;">
                    <p class="mb-0">
                        <span>Copyright © 2017-2025. All rights reserved.</span>
                    </p>
                    <p class="mb-0">
                        <span>Last update: Nov 11, 2025</span>
                    </p>
                    <p class="mb-0">
                        <a class="link-secondary" href="https://beian.miit.gov.cn/"
                           target="_blank">皖ICP备17020938号</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-placeholder {
    height: 0;
    transition: height 150ms ease;
}

/* 固定 footer 基础样式 */
#footer {
    left: 0;
    right: 0;
    background-color: #343a40; /* Bootstrap bg-dark */
}
</style>
