<template>
  <li class="page">
    <router-link
      class="page-link-wrap"
      :to="'/project/'+ $route.params.projectId + '/edit/' + page.id"
    >
      <div class="page-link-wrap__left">
        <img
          :src="page.img"
          class="page-preview"
          alt="img"
        >

        <div class="page-title">
          <svg
            v-if="page.main"
            class="page-title__icon"
            width="14"
            height="16"
            aria-hidden="true"
            role="img"
          >
            <use href="#home-icon" />
          </svg>
          <h4>{{ page.title }}</h4>
        </div>
      </div>
    </router-link>
    <div class="page__right">
      <button
        v-if="!page.main"
        class="link"
        aria-label="Page settings"
        @click="setMainPage(page.id)"
      >
        <svg
          class="link__icon"
          width="14"
          height="14"
          aria-hidden="true"
          role="img"
        >
          <use href="#home-icon" />
        </svg>
        Назначить главной
      </button>

      <button
        class="link"
        aria-label="Page settings"
        @click="settingsButtonHandler()"
      >
        <svg
          class="link__icon"
          width="14"
          height="14"
          aria-hidden="true"
          role="img"
        >
          <use href="#settings-icon" />
        </svg>
        Настройки
      </button>

      <button
        class="link"
        aria-label="Delete page"
        @click="removePage(page.id)"
      >
        <svg
          class="link__icon"
          width="14"
          height="14"
          aria-hidden="true"
          role="img"
        >
          <use href="#trash-icon" />
        </svg>
        Удалить
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "ProjectPage",

  props: {
    page: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions( ['fetchProjectData'] ),

    ...mapMutations( [
        'removePage',
        'setMainPage',
        'changeSettingsModalState',
        'setSettingsModalContent'
    ] ),

    settingsButtonHandler() {
      this.setSettingsModalContent({
        title: this.page.title,
        description: this.page.description,
        url: this.page.url,
        id: this.page.id,
        img: this.page.img
      });
      this.changeSettingsModalState();
    }
  },
}
</script>