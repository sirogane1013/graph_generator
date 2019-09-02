<template>
    <div class="all-wrapper">
        <div class="contents">
            <nuxt/>
            <button-node-remove />
            <button-edge-add />
        </div>
        <div class="sidebar">
            <button-node-add />
            <button-matrix-generate />
        </div>
    </div>
</template>

<script>
    import ButtonEdgeAdd from "~/components/button/EdgeAdd"
    import ButtonNodeAdd from "~/components/button/NodeAdd"
    import ButtonNodeRemove from "~/components/button/NodeRemove"
    import ButtonMatrixGenerate from "~/components/button/MatrixGenerate"

    export default {
        components: {
            ButtonEdgeAdd,
            ButtonNodeAdd,
            ButtonNodeRemove,
            ButtonMatrixGenerate,
        },
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .all-wrapper {
        display: flex;
        width: 100vw;
        height: 99vh;
    }

    .contents {
        width: 70%;
        height: 100%;
    }

    .sidebar {
        width: 30%;
        height: 100%;
    }

</style>
