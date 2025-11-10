<script>
export default {
    name: "Education"
}
</script>

<template>
    <div class="container mt-4">
        <h2 class="mb-4 fw-bolder">Education</h2>

        <!-- 安徽大学 -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body pb-0">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="card-title fw-bolder">Anhui University</h4>
                    <span class="fw-bolder">Hefei, China</span>
                </div>
                <div class="d-flex justify-content-between align-items-start">
                    <p class="fst-italic">Software Engineering (M.E.)</p>
                    <span class="fst-italic">09/2021 – 06/2024</span>
                </div>
            </div>
            <div class="card-footer">
                <p class="card-text text-muted">
                    Research interests: back-end development, system design
                </p>
            </div>
        </div>

        <!-- 海南热带海洋学院 -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body pb-0">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="card-title fw-bolder">Hainan Tropical Ocean University</h4>
                    <span class="fw-bolder">Sanya, China</span>
                </div>
                <div class="d-flex justify-content-between align-items-start">
                    <p class="fst-italic">Software Engineering (B.E.)</p>
                    <span class="fst-italic">09/2013 – 06/2017</span>
                </div>
            </div>
            <div class="card-footer">
                <p class="card-text text-muted">
                    Major Courses: Data Structures, Algorithm Design, Computer Networks
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
    border-radius: 8px;
}
</style>