export const state = () => ({
    list: [],
    isEdgeAddMode: false,
    endPoint1: {},
    endPoint2: {},
    $_uniqueId: 0,
});

export const mutations = {
    startAdding(state) {
        state.isEdgeAddMode = true;
    },
    endAdding(state) {
        state.isEdgeAddMode = false;
    },
    setEndPoint1(state, node) {
        state.endPoint1 = node;
    },
    setEndPoint2(state, node) {
        state.endPoint2 = node;
    },
    create(state) {
        state.list.push({
            id: state.$_uniqueId++,
            endPoint1: state.endPoint1,
            endPoint2: state.endPoint2,
        });
    },
    removeNodeRelatedEdge(state, node) {
        state.list = state.list.filter((edge) => {
            return !(edge.endPoint1 === node || edge.endPoint2 === node);
        })
    },
};