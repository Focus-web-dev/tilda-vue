<template>
  <li class="projects__item">
    <div class="content">
      <router-link
        class="content__header"
        :to="'/project/' + project.id"
      >
        <h2>{{ project.title }}</h2>
      </router-link>
      <div class="content__footer">
        <router-link
          class="link"
          :to="'/project/' + project.id"
          aria-label="Edit project"
        >
          <svg
            class="link__icon"
            width="24"
            height="24"
            aria-hidden="true"
            role="img"
          >
            <use href="#edit-icon" />
          </svg>
          Редактировать сайт
        </router-link>
        <router-link
          class="link"
          to="/"
          aria-label="Visit project link"
        >
          <svg
            class="link__icon"
            width="14"
            height="14"
            aria-hidden="true"
            role="img"
          >
            <use xlink:href="#external-icon" />
          </svg>
          {{ project.url }}
        </router-link>
      </div>

      <button
        aria-label="More options"
        @click="optionsOpen = true"
      >
        <svg
          id="more-card-options"
          class="icon"
          width="24"
          height="24"
          aria-hidden="true"
          role="img"
        >
          <use href="#more-icon" />
        </svg>
      </button>
      <OptionsList
        :options-open="optionsOpen"
        @mouseleave="optionsOpen = false"
      >
        <template #optionsHead>
          <h6>Настройки сайта</h6>
        </template>
        <template #optionsBody>
          <ul class="options-list">
            <li class="options-list__item">
              <button
                class="link"
                @click="editButtonHandler"
              >
                Изменить
              </button>
            </li>
            <li class="options-list__item">
              <button
                class="link danger"
                @click="removeProject( project.id )"
              >
                Удалить
              </button>
            </li>
          </ul>
        </template>
      </OptionsList>
    </div>
  </li>
</template>

<script>
import OptionsList from '@/components/global/OptionsList';
import { mapMutations} from "vuex";

export default {
  name: 'ProjectCard',

  components: {
    OptionsList,
  },

  props: {
    project: {
      type: Object,
      required: true
    },
  },

  data() {
    return {
      optionsOpen: false,
    }
  },

  methods: {
    ...mapMutations( [
      'removeProject',
      'changeModalState',
      'setModalContent'
    ] ),

    editButtonHandler() {
      this.setModalContent({
        title: "Изменить название проекта",
        projectTitle: this.project.title,
        actionButton: "Изменить",
        action: "Rename",
        id: this.project.id,
      });
      this.changeModalState();
    }
  },
}
</script>