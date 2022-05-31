<template>
  <div class="page-blocks">
    <button
      v-if="!blocks.length"
      class="page-blocks__button button apply"
      @click="addNewNoteButtonHandler"
    >
      Добавить запись
    </button>

    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      class="page-blocks__block"
    >
      <div class="tools">
        <div class="tools__left">
          <div class="buttons-group">
            <button class="buttons-group__button">
              <svg
                class="icon icon-text"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#settings-icon" />
              </svg>
              Настройки
            </button>
            <button
              class="buttons-group__button apply"
            >
              <svg
                class="icon icon-text"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#edit-icon" />
              </svg>
              Контент
            </button>
          </div>
        </div>
        <div class="tools__right">
          <div class="buttons-group">
            <button
              class="buttons-group__button"
              aria-label="Clone block"
              @click="optionButtonHandler( block.code, block )"
            >
              <svg
                class="icon"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#duplicate-icon" />
              </svg>
            </button>

            <button
              class="buttons-group__button"
              aria-label="Delete block"
              @click="removeBlockButtonHandler( block.id )"
            >
              <svg
                class="icon"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#trash-icon" />
              </svg>
            </button>

            <button
              class="buttons-group__button"
              aria-label="Hide block"
              @click="changeBlockVisibility( block.id )"
            >
              <svg
                class="icon"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#power-icon" />
              </svg>
            </button>
          </div>

          <div class="buttons-group">
            <button
              v-if="index !== 0"
              class="buttons-group__button"
              aria-label="Move block up"
              @click="moveBlockButtonHandler( index, 'up' )"
            >
              <svg
                class="icon"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#move-up-icon" />
              </svg>
            </button>

            <button
              v-if="index !== blocks.length - 1"
              class="buttons-group__button"
              aria-label="Move block down"
              @click="moveBlockButtonHandler( index, 'down' )"
            >
              <svg
                class="icon"
                width="24"
                height="24"
                aria-hidden="true"
                role="img"
              >
                <use href="#move-down-icon" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <TextBlock
        v-if="((block.code === 1) && (!block.hidden))"
        :block-id="block.id"
      >
        <template #title>
          {{ block.title }}
        </template>
        <template #description>
          {{ block.description }}
        </template>
      </TextBlock>

      <BackgroundImageBlock
        v-else-if="((block.code === 2) && (!block.hidden))"
        :block-id="block.id"
      >
        <template #title>
          {{ block.title }}
        </template>
        <template #description>
          {{ block.description }}
        </template>
      </BackgroundImageBlock>

      <div
        v-if="block.hidden"
        class="hidden-block"
      >
        <h6>Блок скрыт. Нажмите кнопку "Спрятать / Показать" справа, чтобы сделать его видимым.</h6>
      </div>

      <button
        class="add-button"
        @click="addNewNoteButtonHandler( index )"
      >
        <img
          src="@/assets/svg/plus.svg"
          class="add-button__icon"
          alt="create new page"
        >
      </button>
    </div>
  </div>
</template>

<script>
import BackgroundImageBlock from "@/components/blocks/BackgroundImageBlock";
import TextBlock from "@/components/blocks/TextBlock";

import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "PageLayout",

  components: {
    BackgroundImageBlock,
    TextBlock
  },

  props: {
    blocks: {
      type: Array,
      default() {
        return []
      }
    },
    activeOptionsModalSection: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ...mapGetters( [
      'getOptionsModalSections',
      'getOptionsModalState',
      'getSelectedBlock',
    ] )
  },

  // eslint-disable-next-line vue/order-in-components
  emits: {'closeOptionsModal': null, 'updateBlocks': null},

  methods: {
    ...mapMutations( [
      'setOptionsModalSections',
      'setOptionsModalOptions',
      'setSelectedBlock',
      'addNewBlock',
      'removeBlock',
      'moveBlock',
      'changeBlockVisibility',
    ] ),

    addNewNoteButtonHandler( index ) {
      this.setOptionsModalSections([
        {
          title: "Текстовые блоки",
          code: 1,
          options: [
            {
              title: "Блок с текстом",
              code: 1,
              description: "Блок, содержащий простой текст"
            }
          ]
        },
        {
          title: "Обложки",
          code: 2,
          options: [
            {
              title: "Текст с фоновой картинкой",
              code: 2,
              description: "Блок, содержащий текст на фоне картинки"
            }
          ]
        }
      ]);
      this.setSelectedBlock( index );
      this.setOptionsModalOptions(this.getOptionsModalSections.find((el) => el.code === this.activeOptionsModalSection).options);
      this.$emit("closeOptionsModal");
    },

    optionButtonHandler( code, duplicateBlock = {} ) {
      this.addNewBlock( {
        code: code,
        index: this.getSelectedBlock,
        duplicateBlock: duplicateBlock
      } );

      if (this.getOptionsModalState) this.$emit("closeOptionsModal");
    },

    removeBlockButtonHandler( id ) {
      this.removeBlock( id );
      this.$emit("updateBlocks");
    },

    moveBlockButtonHandler( index, direction ) {
      this.moveBlock({
        index: index,
        direction: direction
      } );
    },
  },
}
</script>