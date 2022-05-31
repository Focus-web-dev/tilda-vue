<template>
  <div class="container">
    <div class="wrapper row">
      <div class="panel col-12">
        <div class="panel__left">
          <h6>Мои сайты</h6>
        </div>
        <div class="panel__right">
          <button
            class="add"
            aria-label="Create new project"
            @click="addProjectButtonHandler"
          >
            <span class="add__icon">
              <img
                src="@/assets/svg/plus.svg"
                alt="add"
              >
            </span>
            Создать новый сайт
          </button>
        </div>
      </div>

      <ul
        v-if="allProjects.length !== 0"
        class="projects col-12"
      >
        <ProjectCard
          v-for="project in allProjects"
          :key="project.id"
          :project="project"
        />
        <li class="projects__item_empty" />
      </ul>

      <h3
        v-else
        class="col-12"
      >
        Добавьте ваш первый сайт :)
      </h3>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ProjectCard from '@/components/ProjectsView/ProjectCard';

export default {
  name: "ProjectsList",

  components: {
    ProjectCard,
  },

  props: {
    allProjects: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
  },

  methods: {
    ...mapMutations( [
      'changeModalState',
      'setModalContent',
      'addProject'
    ] ),

    addProjectButtonHandler() {
      this.setModalContent({
        title: "Создать новый сайт",
        projectTitle: "",
        actionButton: "Создать",
        action: "Create"
      });
      this.changeModalState();
    }
  },
}
</script>