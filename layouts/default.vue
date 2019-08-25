<template>
    <div class="all-wrapper">
        <div class="contents">
            <nuxt/>
            <button-node-remove />
            <button-edge-add />
        </div>
        <div class="sidebar">
            <button-node-add />
        </div>
    </div>
</template>

<script>
    import ButtonEdgeAdd from "~/components/button/EdgeAdd"
    import ButtonNodeAdd from "~/components/button/NodeAdd"
    import ButtonNodeRemove from "~/components/button/NodeRemove"

    export default {
        components: {
            ButtonEdgeAdd,
            ButtonNodeAdd,
            ButtonNodeRemove,
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
