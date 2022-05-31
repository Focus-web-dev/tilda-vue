export default {
    actions: {
        fetchPageBlocksData (ctx, obj) {
            let projectData = JSON.parse(localStorage.projects).find((el) => el.id === obj.projectId);
            let pageBlocksData = projectData.pages.find((el) => el.id === obj.pageId).blocks;
            ctx.commit('updatePageBlocksData', pageBlocksData);
        },
    },
    mutations: {
        updatePageBlocksData ( state, pageBlocksData) {
            state.pageBlocksData = pageBlocksData;
        },
    },
    state: {
        pageBlocksData: [],
    },
    getters: {
        getPageBlocksData ( state ) {
            return state.pageBlocksData
        },
    }
}