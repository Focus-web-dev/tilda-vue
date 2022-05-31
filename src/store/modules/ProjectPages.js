export default {
    actions: {
        fetchProjectData (ctx, id) {
            const projectData = JSON.parse(localStorage.projects).find((el) => el.id === id);
            ctx.commit('updateProjectData', projectData)
        },
    },
    mutations: {
        updateProjectData ( state, projectData) {
            state.projectData = projectData;
            state.projectId = projectData.id;
        },
        addNewPage ( state ) {
            let count = 1;
            let newTitle = `Page ${count}`;
            let mainStatus = true;

            for (let i = 0; i < state.projectData.pages.length; i++) {
                if (state.projectData.pages.find((el) => el.title === newTitle)) {
                    count++;
                    newTitle = `Page ${count}`;
                }
                else {
                    break;
                }
            }

            for (let i = 0; i < state.projectData.pages.length; i++) {
                if (state.projectData.pages.find((el) => el.main === true)) {
                    mainStatus = false;
                    break;
                }
                else mainStatus = true;
            }

            let id = Number(Date.now().toString().substring(8));

            state.projectData.pages.push(
                {
                    title: newTitle,
                    id: id,
                    description: "",
                    url: `page-${id}`,
                    main: mainStatus,
                    img: `/img/page-img.jpg`,
                    blocks: [],
                }
            );

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectId);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        removePage ( state, id ) {

            let currentPage = state.projectData.pages.find((el) => el.id === id);
            if ((currentPage.main === true) && (state.projectData.pages.length > 1)) {
                state.projectData.pages[1].main = true;
            }

            state.projectData.pages = state.projectData.pages.filter((el) => {
                return el.id !== id;
            });

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectId);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        setMainPage( state, id ) {
            state.projectData.pages.find((el) => el.main === true).main = false;
            state.projectData.pages.find((el) => el.id === id).main = true;

            let elementIndex = state.projectData.pages.findIndex((el) => el.id === id);
            let element = state.projectData.pages[elementIndex];

            state.projectData.pages.splice(elementIndex, 1);
            state.projectData.pages.splice(0, 0, element);

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectId);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        },

        changeDomain ( state, newDomain ) {
            let projects = JSON.parse(localStorage.projects);

            state.projectData.url = `http://${newDomain}`;
            let index = projects.findIndex((el) => el.id === state.projectId);
            projects.splice(index, 1, state.projectData);
            localStorage.projects = JSON.stringify(projects);
        },

        savePageChanges( state, object ) {
            state.projectData.pages.forEach((el) => {
                if (el.id === object.id) {
                    el.title = object.title;
                    el.description = object.description;
                    el.url = object.url;
                    el.img = object.img;
                }
            });

            let projects = JSON.parse(localStorage.projects);
            let index = projects.findIndex((el) => el.id === state.projectId);
            projects.splice(index, 1, state.projectData);

            localStorage.projects = JSON.stringify(projects);
        }

    },
    state: {
        projectData: {},
        projectId: Number,
        imageLibrary: [
            "/img/page-img.jpg",
            "/img/page-img-1.jpg",
            "/img/page-img-2.jpg",
            "/img/page-img-3.jpg",
            "/img/page-img-4.jpg",
        ]
    },
    getters: {
        getProjectData( state ) {
            return state.projectData
        },
        getDomain( state ) {
            if (state.projectData.url !== undefined) {
                return state.projectData.url.replace(/((https?|ftp):\/\/)?/ig, "");
            }
        },
        getImageLibrary( state ) {
            if (state.imageLibrary.length) {
                return state.imageLibrary;
            }
        }
    }
}