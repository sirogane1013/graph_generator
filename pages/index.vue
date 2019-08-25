<template>
    <svg-canvas>
        <circle-node
                v-for="(node, index) in nodeList" :key="index"
                :id = node.id
                :x = node.x
                :y = node.y
        />
    </svg-canvas>
</template>

<script>
    // noinspection NpmUsedModulesInstalled
    import { mapState } from 'vuex'
    import CircleNode from '~/components/CircleNode.vue'
    import SvgCanvas from '~/components/SvgCanvas.vue'

    export default {
        layout: 'default',
        components: {
            CircleNode,
            SvgCanvas
        },
        computed: {
            ...mapState({
                nodeList: state => state.nodes.list,
            })
        }
    }
</script>

<style>

</style>
