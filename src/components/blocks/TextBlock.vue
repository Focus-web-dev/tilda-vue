<template>
  <div class="text-block">
    <div class="text">
      <h2
        class="text__title"
        contenteditable="true"
        @blur="changeBlockTitle"
      >
        <slot name="title" />
      </h2>
      
      <p
        class="text__description"
        contenteditable="true"
        @blur="changeBlockDescription"
      >
        <slot name="description" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TextBlock",

  props: {
    blockId: {
      type: Number,
      default: 0,
    }
  },

  methods: {
    ...mapMutations( [
      'setBlockTitle',
      'setBlockDescription'
    ] ),

    changeBlockTitle( event ) {
      let obj = {
        id: this.blockId,
        title: event.target.innerText
      }

      this.setBlockTitle( obj );
    },

    changeBlockDescription( event ) {
      let obj = {
        id: this.blockId,
        description: event.target.innerText
      }

      this.setBlockDescription( obj );
    }
  }
}
</script>