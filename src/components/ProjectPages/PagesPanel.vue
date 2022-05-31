<template>
  <div class="project-options">
    <div class="container">
      <div class="wrapper row">
        <div class="panel col-12">
          <div class="panel__left">
            <button
              class="link"
              aria-label="Connect domain"
              @click="connectButtonHandler()"
            >
              <img
                class="link__icon"
                src="@/assets/svg/domain.svg"
                alt="domain"
              >
              Подключить домен
            </button>
            <button
              class="link"
              aria-label="Publish all pages"
            >
              <img
                class="link__icon"
                src="@/assets/svg/publish.svg"
                alt="publish"
              >
              Опубликовать все страницы
            </button>
            <button
              class="link"
              aria-label="Requests"
            >
              <img
                class="link__icon"
                src="@/assets/svg/requests.svg"
                alt="requests"
              >
              Заявки
            </button>
          </div>
          <div class="panel__right">
            <span class="project-link">
              <svg
                width="14"
                height="14"
                aria-hidden="true"
                role="img"
              >
                <use href="#external-icon" />
              </svg>
              Адрес сайта: <a
                href="javascript:void(0);"
                class="link"
              >{{ getProjectData.url }}</a>
            </span>
          </div>
        </div>

        <div class="panel col-12">
          <div class="panel__left">
            <h2>{{ getProjectData.title }}</h2>
          </div>
          <div class="panel__right">
            <button
              aria-label="Project settings"
              class="button default"
            >
              <svg
                class="button__icon default__icon"
                width="14"
                height="14"
                aria-hidden="true"
                role="img"
              >
                <use href="#settings-icon" />
              </svg>
              Настройки сайта
            </button>
            <button
              aria-label="Create new page"
              class="button apply"
              @click="addNewPage"
            >
              <img
                src="@/assets/svg/plus.svg"
                class="button__icon"
                alt="create new page"
              >
              Создать новую страницу
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: 'ProjectPagesPanel',

  computed: {
    ...mapGetters( ['getProjectData'] )
  },

  methods: {
    ...mapMutations( [
      'addNewPage',
      'changeModalState',
      'setModalContent'
    ] ),

    connectButtonHandler() {
      this.setModalContent({
        title: "Подключить домен",
        actionButton: "Подключить"
      });
      this.changeModalState();
    }
  },
}
</script>