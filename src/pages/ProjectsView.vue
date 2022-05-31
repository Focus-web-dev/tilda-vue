<template>
  <Header class="header">
    <template #leftItems>
      <div class="left-items col-10 col-md-6">
        <div class="left-items__logo">
          <router-link
            to="/"
            aria-label="Go to homepage"
          >
            <img
              class="icon"
              src="@/assets/svg/logo.svg"
              alt="Logotype"
            >
          </router-link>
        </div>

        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list__item">
              <router-link
                to="/"
                class="link"
              >
                Мои сайты
              </router-link>
            </li>
            <li class="nav-list__item">
              <router-link
                to="/profile"
                class="link"
              >
                Профиль
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </template>
    <template #rightItems>
      <div class="right-items col-2 col-md-6">
        <ul class="nav-list">
          <li class="nav-list__item">
            <a
              href="javascript:void(0);"
              class="link"
            >Выйти</a>
          </li>
        </ul>
      </div>
    </template>
  </Header>

  <ProjectList :all-projects="allProjects" />
  <Footer />

  <InputModalLayout
    id="modal"
    :class="{'modal': getModalState, 'visually-hidden': !getModalState}"
  >
    <template #modalHead>
      <h6>{{ getModalContent.title }}</h6>
      <button
        class="close"
        aria-label="Close modal"
        @click="closeModal"
      />
    </template>
    <template #modalBody>
      <label for="text-input">Название</label>
      <input
        id="text-input"
        v-model="inputValue"
        placeholder="Project 1"
        class="modal-input_js"
        :class="{'error': error}"
        type="text"
        @input="checkInputValue(inputValue, getModalContent.projectTitle )"
      >
      <p>
        Используется только внутри Тильды.
      </p>
    </template>
    <template #modalFooter>
      <button
        class="button cancel"
        @click="closeModal"
      >
        Отмена
      </button>

      <button
        :class="{'error': error}"
        class="button apply"
        @click="applyButtonHandler( inputValue, getModalContent.id )"
      >
        {{ getModalContent.actionButton }}
      </button>
    </template>
  </InputModalLayout>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ProjectList from '@/components/ProjectsView/ProjectsList';
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import InputModalLayout from "@/components/modals/InputModal";

export default {
  name: 'ProjectsView',

  components: {
    Header,
    ProjectList,
    Footer,
    InputModalLayout,
  },

  data() {
    return {
      inputValue: "",
      error: false
    }
  },

  computed: {
    ...mapGetters( [
      'allProjects',
      'getModalContent',
      'getModalState'
    ] ),
  },

  watch: {
    getModalContent: function () {
      this.inputValue = this.getModalContent.projectTitle;
    }
  },

  mounted() {
    this.fetchProjects();
  },

  methods: {
    ...mapActions( ['fetchProjects'] ),
    ...mapMutations( [
      'updateProjects',
      'addProject',
      'renameProject',
      'changeModalState'
    ] ),

    checkInputValue( inputValue, currentValue ) {
      for (let projectItem of this.allProjects) {
        let projectTitle = projectItem.title.toLowerCase().split(" ").join("");
        let newProjectTitle = inputValue.toLowerCase().split(" ").join("");

        if ((projectTitle === newProjectTitle) && (newProjectTitle !== currentValue.toLowerCase().split(" ").join(""))) {
          this.error = true;
          break;
        }
        else {
          this.error = false;
        }
      }
    },

    applyButtonHandler( inputValue, id ) {
      if (this.getModalContent.action === "Create") {
        this.addProject(inputValue);
      }
      else if (this.getModalContent.action === "Rename") {
        this.renameProject({
          newTitle: inputValue,
          id: id,
        });
      }
      this.closeModal();
    },

    closeModal() {
      this.inputValue = "";
      this.error = false;
      this.changeModalState();
    }
  },
}
</script>