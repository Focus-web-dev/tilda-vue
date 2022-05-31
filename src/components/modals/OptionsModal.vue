<template>
  <div>
    <div class="sections">
      <div class="sections__head">
        <slot name="optionsModalHead" />
      </div>
      <slot name="optionsModalSections" />

      <div
        class="sections__options"
      >
        <slot name="optionsModalOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "OptionsModalLayout",

  computed: {
    ...mapGetters( ['getOptionsModalState'] ),
  },

  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target === document.querySelector('#optionsModalLayout')) this.changeOptionsModalState();
    });
  },

  methods: {
    ...mapMutations( [
      'changeOptionsModalState',
    ] ),
  }
}
</script>