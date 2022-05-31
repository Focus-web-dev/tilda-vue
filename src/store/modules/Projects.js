export default {
    actions: {
        fetchProjects(ctx) {
            if (localStorage.projects) {
                const projects = JSON.parse(localStorage.projects);
                ctx.commit('updateProjects', projects)
            }
        },
    },
    mutations: {
        updateProjects( state, projects ) {
            state.projects = projects
        },
        addProject ( state, newTitle ) {
            if (newTitle === "") {
                let count = 1;
                newTitle = `Project ${count}`;

                for (let i = 0; i < state.projects.length; i++) {
                    if (state.projects.find((el) => el.title === newTitle)) {
                        count++;
                        newTitle = `Project ${count}`;
                    }
                    else {
                        break;
                    }
                }
            }

            let id = Number(Date.now().toString().substring(8));

            state.projects.push(
                {
                    title: newTitle,
                    id: id,
                    url: `https://project${id}.tilda.ws`,
                    pages: []
                }
            );

            localStorage.projects = JSON.stringify(state.projects);
        },
        removeProject ( state, id ) {
            state.projects = state.projects.filter((el) => {
                return el.id !== id;
            });

            localStorage.projects = JSON.stringify(state.projects);
        },
        renameProject ( state, object ) {
            let newTitle = object.newTitle;
            let targetId = object.id;

            state.projects.forEach((el) => {
                if (el.id === targetId) el.title = newTitle;
            });
            localStorage.projects = JSON.stringify(state.projects);
        },
    },
    state: {
        projects: [],
    },
    getters: {
        allProjects( state ) {
            return state.projects
        },
    }
}