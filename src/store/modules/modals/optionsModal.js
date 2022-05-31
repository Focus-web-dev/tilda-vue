export default {
    actions: {

    },
    mutations: {
        changeOptionsModalState( state ) {
            state.optionsModalOpened = !state.optionsModalOpened;
        },

        setOptionsModalSections(state, array) {
            state.optionsModalSections = array;
        },

        setOptionsModalOptions( state, array ) {
            state.optionsModalOptions = array;
        },
    },
    state: {
        optionsModalOpened: false,

        optionsModalSections: [],
        optionsModalOptions: [],
    },
    getters: {
        getOptionsModalState( state ) {
            return state.optionsModalOpened;
        },

        getOptionsModalSections( state ) {
            return state.optionsModalSections;
        },

        getOptionsModalOptions( state ) {
            return state.optionsModalOptions;
        },
    }
}