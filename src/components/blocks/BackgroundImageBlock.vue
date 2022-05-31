<template>
  <section
    class="background-image-block"
    style="background-image: url('/img/page-img.jpg')"
  >
    <div
      class="background-image-block__text"
    >
      <h1
        class="title"
        contenteditable="true"
        @blur="changeBlockTitle"
      >
        <slot name="title" />
      </h1>
      <p
        class="description"
        contenteditable="true"
        @blur="changeBlockDescription"
      >
        <slot name="description" />
      </p>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BackgroundImageBlock",

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