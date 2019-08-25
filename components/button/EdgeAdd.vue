<template>
    <button
            :style="{
                position: 'absolute',
                display: this.isHovering ? 'block' : 'none',
                top: this.hoveredNode.y+this.size+30+'px',
                left: this.hoveredNode.x+this.size+'px',
            }"
            @click="addEdge">
        エッジを追加
    </button>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "EdgeAdd",
        computed: {
            ...mapState("nodes", [
                "isHovering",
                "hoveredNode",
                "size",
            ]),
        },
        methods: {
            addEdge() {
                this.$store.commit('edges/startAdding');
                this.$store.commit('edges/setEndPoint1', this.hoveredNode);
            },
        }
    }
</script>

<style scoped>

</style>