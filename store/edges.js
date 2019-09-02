export const state = () => ({
    list: [],
    isEdgeAddMode: false,
    endPoint1: {},
    endPoint2: {},
});

export const getters = {
    getList (state) {
        return state.list;
    }
};

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
        const isEdgeExist = (() => {
            const foundNode = state.list.find((edge) => {
                return    (edge.endPoint1 === state.endPoint1 && edge.endPoint2 === state.endPoint2)
                       || (edge.endPoint1 === state.endPoint2 && edge.endPoint2 === state.endPoint1);
            });
            return typeof foundNode !== "undefined";
        })();
        if (!isEdgeExist) {
            state.list.push({
                endPoint1: state.endPoint1,
                endPoint2: state.endPoint2
            });
        }
    },
    removeNodeRelatedEdge(state, node) {
        state.list = state.list.filter((edge) => {
            return !(edge.endPoint1 === node || edge.endPoint2 === node);
        })
    },
};