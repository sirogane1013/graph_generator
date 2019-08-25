<template>
    <button
            :style="{
                position: 'absolute',
                display: isHovering ? 'block' : 'none',
                top: this.hoveredNode.y+this.nodeSize+'px',
                left: this.hoveredNode.x+this.nodeSize+'px',
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
            ...mapState({
                isHovering: state => state.nodes.isHovering,
                hoveredNode: state => state.nodes.hoveredNode,
                nodeSize: state => state.nodes.size,
            }),
        },
        methods: {
            removeHoveredNode() {
                this.$store.commit('nodes/remove', this.hoveredNode);
                this.$store.commit('nodes/unhoverNode');
            },
        }
    }
</script>

<style scoped>

</style>