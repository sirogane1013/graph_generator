export const state = () => ({
    list: [],
    size: 50,
    isHovering: false,
    hoveredNode: {},
    $_uniqueId: 0,
});

export const getters = {
    getNodeById: (state) => (id) => {
        return state.list.find(node => node.id === id)
    },
    getAdjacencyMatrix(state, getters, rootState, rootGetters) {
        const edges = rootGetters['edges/getList'];
        const matrix = [...Array(state.list.length)].map(() => Array(state.list.length).fill(0)); // initialize adjacency matrix
        for (const edge of edges) {
            const index1 = state.list.indexOf(edge.endPoint1);
            const index2 = state.list.indexOf(edge.endPoint2);
            matrix[index1][index2] = 1;
            matrix[index2][index1] = 1;
        }
        return matrix;
    },
};

export const mutations = {
    add(state, {x, y}) {
        state.list.push({
            id: state.$_uniqueId++,
            x: x,
            y: y,
        })
    },
    moveNode(state, {id, x, y}) {
        const node = state.list.find(node => node.id === id);
        node.x = x;
        node.y = y;
    },
    hoverNode(state, id) {
        state.hoveredNode = state.list.find(node => node.id === id);
        state.isHovering = true;
    },
    unhoverNode(state, id) {
        state.hoveredNode = {};
        state.isHovering = false;
    },
    resize(state, size) {
        state.size = size;
    },
    remove(state, node) {
        state.list.splice(
            state.list.indexOf(node),
            1
        )
    },
};
