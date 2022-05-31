<template>
  <div class="preview-page">
    <PageLayout
      :blocks="getPageBlocksData"
    />

    <router-link
      :to="`/project/${$route.params.projectId}/edit/${$route.params.pageId}`"
      class="back"
    >
      Вернуться к редактированию
    </router-link>
  </div>
</template>

<script>
import PageLayout from "@/components/global/PageBlocks";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "PreviewPage",

  components: {
    PageLayout
  },

  methods: {
    ...mapActions( ['fetchPageBlocksData'] ),
    ...mapMutations( ['updatePageBlocksData'] ),
  },

  computed: {
    ...mapGetters( ['getPageBlocksData'] )
  },

  mounted() {
    let object = {
      projectId: Number(this.$route.params.projectId),
      pageId: Number(this.$route.params.pageId)
    }
    this.fetchPageBlocksData( object );
  },
}
</script>