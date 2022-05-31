export default {
    actions: {

    },
    mutations: {
        changeModalState( state ) {
            state.modalOpened = !state.modalOpened;
        },
        setModalContent(state, object) {
            state.modalContent = object;
        },
        changeSettingsModalState( state ) {
            state.settingsModalOpened = !state.settingsModalOpened;
        },
        setSettingsModalContent(state, object) {
            state.settingsModalContent = object;
        },
        setActiveTab( state, tab ) {
          state.tabs.active = tab;
        },
    },
    state: {
        modalOpened: false,
        modalContent: {},

        settingsModalOpened: false,
        settingsModalContent: {},

        tabs: {
            active: "Главное",
            list: [
                {
                    title: "Главное",
                    id: Date.now()
                },
                {
                    title: "Бейджик",
                    id: Date.now()
                }
            ],
        }
    },
    getters: {
        getModalState( state ) {
            return state.modalOpened;
        },

        getModalContent( state ) {
            return state.modalContent;
        },

        getSettingsModalState( state ) {
          return state.settingsModalOpened;
        },

        getSettingsModalContent( state ) {
            return state.settingsModalContent;
        },

        getTabs( state ) {
            return state.tabs;
        }
    }
}