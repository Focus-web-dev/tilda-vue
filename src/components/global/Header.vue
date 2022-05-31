<template>
  <header>
    <svg
      class="waves-icon"
      width="14"
      height="14"
      aria-hidden="true"
      role="img"
    >
      <use href="#waves" />
    </svg>
    <div class="container">
      <div class="wrapper row">
        <slot name="leftItems" />
        <slot name="rightItems" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>