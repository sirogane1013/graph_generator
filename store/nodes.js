export const state = () => ({
    list: [],
    size: 50,
    isHovering: false,
    hoveredNode: {},
    $_uniqueId: 0,
});

export const getter = {
    getNodeById: (state) => (id) => {
        return state.list.find(node => node.id === id)
    }
};

export const mutations = {
    add(state, position) {
        state.list.push({
            id: state.$_uniqueId++,
            x: position.x,
            y: position.y,
        })
    },
    moveNode(state, payload) {
        const node = state.list.find(node => node.id === payload.id);
        node.x = payload.x;
        node.y = payload.y;
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
