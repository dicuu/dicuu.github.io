<script>
export default {
    name: 'Projects'
}
</script>

<template>
    <div class="row my-3">
        <h2 class="fw-bolder text-center">My Projects</h2>
    </div>
    <div class="row g-3">
        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <h5 class="card-header fw-bolder">Personal Blog</h5>
                <div class="card-body">
                    <p class="card-text">A scalable blog system implemented with Go and Vue, supporting Markdown, comments, and full-text search. Used to share technical insights, programming tutorials, and development experiences.</p>
                    <p class="mb-0"><strong>Topics: </strong>Go, Java, Vue, SQLite</p>
                </div>
                <div class="card-footer text-end">
                    <a href="/" class="btn btn-sm btn-outline-primary">View Repository</a>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <h5 class="card-header fw-bolder">Data Visualization Platform</h5>
                <div class="card-body">
                    <p class="card-text">Real-time display of business metrics based on ECharts and WebSocket.</p>
                    <p class="mb-0"><strong>Technologies: </strong>Vue, ECharts, WebSocket</p>
                </div>
                <div class="card-footer text-end">
                    <a href="/" class="btn btn-sm btn-outline-primary">View Demo</a>
                </div>
            </div>
        </div>
    </div>
</template>
