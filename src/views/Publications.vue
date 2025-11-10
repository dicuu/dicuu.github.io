<script>
export default {
    name: "Publications"
}
</script>

<template>
    <div class="container mt-4">
        <h2 class="mb-4 fw-bolder">2024</h2>

        <div class="card mb-4 shadow-sm">
            <div class="card-body pb-0">
                <h5 class="card-title fw-bolder">DSChain: A Blockchain System for Complete Lifecycle Security of Data in
                    Internet of Things</h5>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <strong>• Authors:</strong> Jie Cui, Yatao Li, Qingyang Zhang, Hong Zhong, Chengjie Gu, Debiao
                        He
                    </li>
                    <li class="list-group-item">
                        <strong>• Journal:</strong> IEEE Transactions on Dependable and Secure Computing (TDSC)
                    </li>
                    <li class="list-group-item">
                        <strong>• DOI:</strong>
                        <a href="https://doi.org/10.1109/TDSC.2023.3337093" target="_blank"
                           class="text-decoration-none">
                            10.1109/TDSC.2023.3337093
                        </a>
                    </li>
                    <li class="list-group-item">
                        <strong>• Issue:</strong> Volume: 21, Issue: 4, July-Aug. 2024
                    </li>
                    <li class="list-group-item">
                        <strong>• Code:</strong>
                        <a href="https://github.com/Dicuu/DSChain" target="_blank" class="text-decoration-none">
                            https://github.com/Dicuu/DSChain
                        </a>
                    </li>
                </ul>

                <div class="mt-3">
                    <button class="btn btn-outline-dark fw-bolder">Abstract</button>
                    <p class="mt-3">
                        There is a growing concern about the complete lifecycle security of data in Internet of Things
                        (IoT). This may cause privacy and trust problems for users regarding data sources, data storage,
                        and access control for data sharing. Blockchain is a valuable solution to the above problems
                        through distributed ledger technology, and it has been widely applied in various fields such as
                        public services, finance, and IoT. However, the data in IoT are characterized by a large
                        quantity, large capacity, and timely response, and existing blockchain systems only partially
                        resolve them for data security and performance. We propose DSChain for IoT data security to
                        address the challenges mentioned above. Our system uses a certificateless signature to ensure a
                        trusted data source and public auditing to ensure the integrity of stored data while using
                        ciphertext-policy attribute-based encryption to control access to shared data. Moreover, we
                        propose a packaging mechanism based on the Merkle Hash Tree that effectively improves system
                        performance. We implement the DSChain and provide a detailed analysis of performance and
                        security. The experimental results indicate that DSChain can achieve approximately 1035
                        transactions per second on a single peer and is scalable.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>