<template>
    <g
            fill="#ffffff"
            :width="radius*4"
            :height="radius*4"
    >
        <circle
                :cx="x"
                :cy="y"
                :r="radius"
                stroke="#000000"
                stroke-width="2"
                @mouseover="onMouseOver"
                @mousedown="onMouseDown"
                @mouseup="onMouseUp"
                @click="onClick"
        >
        </circle>
    </g>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "GraphNode",
        computed: {
            ...mapState("nodes", {
                radius: "size",
            }),
            ...mapState("edges", [
                "isEdgeAddMode",
            ]),
            self() {
                return this.$store.getters['nodes/getNodeById'](this.id);
            },
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
            x: {
                type: Number,
                required: true,
            },
            y: {
                type: Number,
                required: true,
            }
        },
        methods: {
            onMouseOver() {
                this.$store.commit('nodes/hoverNode', this.id);
            },
            onMouseDown() {
                document.addEventListener("mousemove", this.onMouseMove);
            },
            onMouseMove(e) {
                this.$store.commit('nodes/moveNode', {
                    id: this.id,
                    x: e.clientX,
                    y: e.clientY
                });
            },
            onMouseUp() {
                document.removeEventListener("mousemove", this.onMouseMove);
            },
            onClick() {
                if (this.isEdgeAddMode) {
                    this.$store.commit('edges/setEndPoint2', this.self);
                    this.$store.commit('edges/create');
                    this.$store.commit('edges/endAdding');
                }
            }
        }
    }
</script>

<style scoped>

</style>