<template>
    <!--suppress HtmlUnknownTag -->
    <g
            fill="#ffffff"
    >
        <line
                :x1="x1"
                :y1="y1"
                :x2="x2"
                :y2="y2"
                stroke="#000000"
                stroke-width="2"
        >
        </line>
    </g>
</template>

<script>

    export default {
        name: "GraphEdge",
        computed: {
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
            x1: {
                type: Number,
                required: true,
            },
            y1: {
                type: Number,
                required: true,
            },
            x2: {
                type: Number,
                required: true,
            },
            y2: {
                type: Number,
                required: true,
            }
        },
    }
</script>

<style scoped>

</style>