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

  <PagesPanel />

  <PagesList :all-pages="getProjectData.pages" />

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
      <label for="text-input">Ваш домен</label>
      <input
        id="text-input"
        v-model="inputValue"
        :placeholder="getDomain"
        class="modal-input_js"
        :class="{'error': error}"
        type="text"
        @input="checkInputValue(inputValue)"
      >
      <p>
        Пример: google.com
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
        :class="{ 'error': error }"
        class="button apply"
        @click="applyButtonHandler( inputValue )"
      >
        {{ getModalContent.actionButton }}
      </button>
    </template>
  </InputModalLayout>

  <InputModalLayout
    id="settingsModal"
    ref="modalWrapper"
    :class="{'modal': getSettingsModalState, 'visually-hidden': !getSettingsModalState}"
  >
    <template #modalHead>
      <div class="top">
        <h6>Настройки страницы</h6>
        <button
          class="close"
          aria-label="Close modal"
          @click="closeSettingsModal"
        />
      </div>
      <div class="tabs">
        <button
          v-for="tab of getTabs.list"
          :key="tab.id"
          :class="{ 'active': tab.title === getTabs.active }"
          class="tabs__tab"
          @click="setActiveTab(tab.title)"
        >
          {{ tab.title }}
        </button>
      </div>
    </template>
    <template #modalBody>
      <div
        v-if="getTabs.active === 'Главное'"
        class="main"
      >
        <div class="main__field">
          <label for="title-input">Заголовок</label>
          <input
            id="title-input"
            v-model="titleInputValue"
            :class="{ 'error': titleError }"
            placeholder="Page 1"
            @input="checkTitleInputValue(titleInputValue, getSettingsModalContent.title)"
          >
        </div>
        <div class="main__field">
          <label for="description-input">Описание</label>
          <input
            id="description-input"
            v-model="descriptionInputValue"
            placeholder="Описание страницы"
          >
        </div>
        <div class="main__field">
          <label for="url-input">Адрес страницы</label>
          <input
            id="url-input"
            v-model="urlInputValue"
            :class="{ 'error': urlError }"
            placeholder="page-1"
            @input="checkUrlInputValue(urlInputValue, getSettingsModalContent.url)"
          >
          <p>
            Основной URL сайта можно поменять в <button class="link">
              настройках сайта
            </button>. Там же вы можете подключить <button
              class="link"
              @click="domainButtonHandler()"
            >
              свой домен
            </button>.
          </p>
        </div>
      </div>
      <div
        v-else-if="getTabs.active === 'Бейджик'"
        class="badge"
      >
        <h5>Выберите изображение бейджика</h5>
        <ul class="previews-list">
          <li
            v-for="item of getImageLibrary"
            :key="item"
            class="previews-list__item"
          >
            <button
              :class="{ 'active': item === activeImage }"
              @click="activeImage = item"
            >
              <img
                :src="item"
                :alt="item"
              >
            </button>
          </li>
        </ul>
      </div>
    </template>
    <template #modalFooter>
      <button
        class="button cancel"
        @click="closeSettingsModal"
      >
        Закрыть
      </button>

      <button
        :class="{'error': titleError || urlError}"
        class="button apply"
        @click="saveChangesButtonHandler(getSettingsModalContent.id)"
      >
        Сохранить изменения
      </button>
    </template>
  </InputModalLayout>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Header from "@/components/global/Header";
import PagesPanel from "@/components/ProjectPages/PagesPanel";
import PagesList from "@/components/ProjectPages/PagesList";
import Footer from "@/components/global/Footer";
import InputModalLayout from "@/components/modals/InputModal";

export default {
  name: 'ProjectPagesView',

  components: {
    Header,
    PagesPanel,
    PagesList,
    InputModalLayout,
    Footer,
  },

  data() {
    return {
      activeImage: "",

      inputValue: "",
      error: false,

      titleInputValue: "",
      urlInputValue: "",
      descriptionInputValue: "",
      titleError: false,
      urlError: false,
    }
  },

  watch: {
    getSettingsModalContent: function () {
      this.titleInputValue = this.getSettingsModalContent.title;
      this.descriptionInputValue = this.getSettingsModalContent.description;
      this.urlInputValue = this.getSettingsModalContent.url;
      this.activeImage = this.getSettingsModalContent.img;
    }
  },

  computed: {
    ...mapGetters(
        [
          'getProjectData',
          'getDomain',
          'getModalState',
          'getModalContent',
          'getTabs',
          'getSettingsModalState',
          'getSettingsModalContent',
          'getImageLibrary'
        ]
    ),
  },

  mounted() {
    this.fetchProjectData( Number(this.$route.params.projectId) );
  },

  methods: {
    ...mapActions( ['fetchProjectData'] ),
    ...mapMutations(
        [
          'updateProjectData',
          'changeModalState',
          'setModalContent',
          'setActiveTab',
          'changeSettingsModalState',
          'addNewPage',
          'changeDomain',
          'savePageChanges'
        ]
    ),

    checkInputValue: function (inputValue) {
      const DOMAIN_REGEX = /^([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/i;
      DOMAIN_REGEX.test(inputValue) ? this.error = false : this.error = true;
    },

    applyButtonHandler( inputValue) {
      if (inputValue === "") this.error = true;
      else {
        this.changeDomain(inputValue);
        this.closeModal();
      }
    },

    domainButtonHandler() {
      this.closeSettingsModal();
      this.setModalContent({
        title: "Подключить домен",
        actionButton: "Подключить"
      });
      this.changeModalState();
    },

    closeModal() {
      this.inputValue = "";
      this.error = false;
      this.changeModalState();
    },

    closeSettingsModal() {
      this.inputValue = "";
      this.error = false;
      this.changeSettingsModalState();
    },

    checkTitleInputValue( inputValue, currentValue ) {
      for (let pageItem of this.getProjectData.pages) {
        let pageTitle = pageItem.title.toLowerCase().split(" ").join("");
        let newPageTitle = inputValue.toLowerCase().split(" ").join("");

        if (
            (pageTitle === newPageTitle) && (newPageTitle !== currentValue.toLowerCase().split(" ").join(""))
            ||
            (newPageTitle.length === 0)
        ) {
          this.titleError = true;
          break;
        }
        else {
          this.titleError = false;
        }
      }
    },

    checkUrlInputValue( inputValue, currentValue ) {
      for (let pageItem of this.getProjectData.pages) {
        let pageUrl = pageItem.url.toLowerCase().split(" ").join("");
        let newPageUrl = inputValue.toLowerCase().split(" ").join("");

        if (
            (pageUrl === newPageUrl) && (newPageUrl !== currentValue.toLowerCase().split(" ").join(""))
            ||
            (newPageUrl.length < 3)
        ) {
          this.urlError = true;
          break;
        }
        else {
          this.urlError = false;
        }
      }
    },

    saveChangesButtonHandler( id ) {
      this.savePageChanges({
        id: id,
        title: this.titleInputValue,
        description: this.descriptionInputValue,
        url: this.urlInputValue,
        img: this.activeImage,
        blocks: this.blocks
      });
      this.closeSettingsModal();
    }
  },
}
</script>