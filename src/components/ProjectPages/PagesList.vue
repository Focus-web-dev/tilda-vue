<template>
  <div class="pages-list">
    <div class="container">
      <div class="wrapper row">
        <h6 class="col-12">
          Страницы сайта:
        </h6>

        <ul
          v-if="allPages.length"
          class="pages col-12"
        >
          <ProjectPage
            v-for="page in allPages"
            :key="page.id"
            :page="page"
          />
        </ul>

        <h3
          v-else
          class="col-12"
        >
          Добавьте первую страницу
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPage from "@/components/ProjectPages/ProjectPage";

export default {
  name: "ProjectPagesList",

  components: {
    ProjectPage
  },

  props: {
    allPages: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
  }
}
</script>