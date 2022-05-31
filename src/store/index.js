import { createStore } from 'vuex';
import ProjectsStore from './modules/Projects';
import ProjectPagesStore from './modules/ProjectPages';
import EditPageStore from './modules/EditPage';
import InputModalStore from './modules/modals/inputModal';
import OptionsModalStore from './modules/modals/optionsModal';
import PreviewPage from "./modules/PreviewPage";

const store = createStore({
    modules: {
        ProjectsStore,
        ProjectPagesStore,
        EditPageStore,
        PreviewPage,

        InputModalStore,
        OptionsModalStore
    }
});

export default store;