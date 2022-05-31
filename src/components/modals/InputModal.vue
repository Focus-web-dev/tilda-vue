<template>
  <div>
    <div class="content">
      <div class="content__head">
        <slot name="modalHead" />
      </div>
      <div class="content__body">
        <slot name="modalBody" />
      </div>
      <div class="content__footer">
        <slot name="modalFooter" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ModalLayout",

  computed: {
    ...mapGetters( ['getModalState'] ),
  },

  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target === document.querySelector('#settingsModal')) this.changeSettingsModalState();
      else if (e.target === document.querySelector('#modal')) this.changeModalState();
    });
  },

  methods: {
    ...mapMutations( [
      'changeModalState',
      'changeSettingsModalState'
    ] ),
  },
}
</script>