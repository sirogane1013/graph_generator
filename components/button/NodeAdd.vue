<template>
    <button @click="add({x: 100, y: 100})">
        ノードを追加
    </button>
</template>

<script>
    // noinspection NpmUsedModulesInstalled
    import { mapMutations } from 'vuex'

    export default {
        name: "NodeAdd",
        methods: {
            ...mapMutations({
                add: 'nodes/add',
            }),
        }
    }
</script>

<style scoped>

</style>