<template>
    <button
            :style="{
                position: 'absolute',
                display: this.isHovering ? 'block' : 'none',
                top: this.hoveredNode.y+this.size+'px',
                left: this.hoveredNode.x+this.size+'px',
            }"
            @click="removeHoveredNode">
        ノードを削除
    </button>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "NodeRemove",
        computed: {
            ...mapState("nodes", [
                "isHovering",
                "hoveredNode",
                "size",
            ]),
        },
        methods: {
            removeHoveredNode() {
                this.$store.commit('nodes/remove', this.hoveredNode);
                this.$store.commit('edges/removeNodeRelatedEdge', this.hoveredNode);
                this.$store.commit('nodes/unhoverNode');
            },
        }
    }
</script>

<style scoped>

</style>