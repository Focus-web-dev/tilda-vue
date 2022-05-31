export default {
    actions: {
         fetchPageData (ctx, obj) {
            let projectData = JSON.parse(localStorage.projects).find((el) => el.id === obj.projectId);
            let object = {
                projectData: projectData,
                pageData: projectData.pages.find((el) => el.id === obj.pageId),
            }
            ctx.commit('updatePageData', object)
        },
    },
    mutations: {
        updatePageData ( state, obj) {
            state.projectData = obj.projectData;
            state.pageData = obj.pageData;
        },
        savePageDataChanges( state, obj ) {
            state.pageData = obj;
            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },
        addNewBlock( state, obj ) {
            let newBlock;
            if (obj.duplicateBlock.id === undefined) {
                newBlock = {
                    id: Date.now(),
                    code: obj.code,
                    hidden: false,
                    title: "Lorem ipsum",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, cumque error est fugiat illum in itaque laboriosam minus nulla obcaecati possimus, quasi quibusdam quod rerum sit, temporibus unde voluptates."
                }
            }
            else {
                newBlock = {
                    id: Date.now(),
                    code: obj.duplicateBlock.code,
                    hidden: obj.duplicateBlock.hidden,
                    title: obj.duplicateBlock.title,
                    description: obj.duplicateBlock.description
                };
            }

            state.pageData.blocks.splice(obj.index + 1, 0 , newBlock);

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        removeBlock( state, id ) {
            state.pageData.blocks = state.pageData.blocks.filter((el) => el.id !== id);

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        moveBlock( state, obj ) {
            if ( obj.direction === 'up' ) {
                [state.pageData.blocks[obj.index], state.pageData.blocks[obj.index - 1]] = [state.pageData.blocks[obj.index - 1], state.pageData.blocks[obj.index]]
            } else {
                [state.pageData.blocks[obj.index], state.pageData.blocks[obj.index + 1]] = [state.pageData.blocks[obj.index + 1], state.pageData.blocks[obj.index]]
            }

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        changeBlockVisibility( state, id ) {
            let targetBlock = state.pageData.blocks.find((el) => el.id === id);
            targetBlock.hidden = !targetBlock.hidden;

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        setBlockTitle( state, obj ) {
            let targetBlock = state.pageData.blocks.find((el) => el.id === obj.id);
            targetBlock.title = obj.title;

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);

        },

        setBlockDescription ( state, obj ) {
            let targetBlock = state.pageData.blocks.find((el) => el.id === obj.id);
            targetBlock.description = obj.description;

            let pageIndex = state.projectData.pages.findIndex((el) => el.id === state.pageData.id);
            state.projectData.pages.splice(pageIndex, 1, state.pageData);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectData.id);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        setSelectedBlock( state, index ) {
            state.selectedBlock = index;
        },
    },
    state: {
        projectData: {},
        pageData: {},

        selectedBlock: Number,
    },
    getters: {
        getEditData ( state ) {
            return {
                projectData: state.projectData,
                pageData: state.pageData
            }
        },

        getSelectedBlock ( state ) {
            return state.selectedBlock;
        }
    }
}