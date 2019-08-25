<template>
    <!--suppress HtmlUnknownTag -->
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
        >
        </circle>
    </g>
</template>

<script>
    // noinspection NpmUsedModulesInstalled
    import { mapState } from 'vuex'

    export default {
        name: "CircleNode",
        computed: {
            ...mapState({
                radius: state => state.nodes.size,
            }),
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
        }
    }
</script>

<style scoped>

</style>