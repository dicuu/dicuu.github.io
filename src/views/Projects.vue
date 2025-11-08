<script>
export default {
    name: 'Projects'
}
</script>

<template>
    <div class="row g-3">
        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">个人博客系统</h5>
                    <p class="card-text">使用 Go + Vue 实现的可扩展博客系统，支持 Markdown、评论和全文搜索。</p>
                    <p class="mb-0"><strong>技术：</strong>Go, Gin, Vue, SQLite</p>
                </div>
                <div class="card-footer text-end">
                    <a href="#" class="btn btn-sm btn-outline-primary">查看仓库</a>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">数据可视化平台</h5>
                    <p class="card-text">实时展示业务指标，基于 ECharts 与 WebSocket。</p>
                    <p class="mb-0"><strong>技术：</strong>Vue, ECharts, WebSocket</p>
                </div>
                <div class="card-footer text-end">
                    <a href="#" class="btn btn-sm btn-outline-primary">查看演示</a>
                </div>
            </div>
        </div>
    </div>
</template>
