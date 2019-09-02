<template>
    <button @click="showAdjacencyMatrix">
        隣接行列を生成
    </button>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "MatrixGenerate",
        methods: {
            showAdjacencyMatrix()  {
                console.log(this.$store.getters['nodes/getAdjacencyMatrix'])
            },
        },
    }
</script>

<style scoped>

</style>