<template>
    <svg-canvas>
        <graph-edge
                v-for="(edge, index) in this.edgeList" :key="`edge-${index}`"
                :id = edge.id
                :x1 = edge.endPoint1.x
                :y1 = edge.endPoint1.y
                :x2 = edge.endPoint2.x
                :y2 = edge.endPoint2.y
        />
        <graph-node
                v-for="(node, index) in this.nodeList" :key="`node-${index}`"
                :id = node.id
                :x = node.x
                :y = node.y
        />
    </svg-canvas>
</template>

<script>
    import { mapState } from 'vuex'
    import GraphNode from '~/components/GraphNode.vue'
    import GraphEdge from "../components/GraphEdge"
    import SvgCanvas from '~/components/SvgCanvas.vue'

    export default {
        layout: 'default',
        components: {
            GraphNode,
            GraphEdge,
            SvgCanvas,
        },
        computed: {
            ...mapState({
                nodeList: state => state.nodes.list,
                edgeList: state => state.edges.list,
            })
        }
    }
</script>

<style>

</style>
