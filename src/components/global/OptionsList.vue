<template>
  <div :class="{'options': optionsOpen, 'visually-hidden': !optionsOpen}">
    <slot name="optionsHead" />
    <slot name="optionsBody" />
  </div>
</template>

<script>
export default {
  name: "OptionsList",

  props: {
    optionsOpen: {
      type: Boolean,
    },
  },
}
</script>