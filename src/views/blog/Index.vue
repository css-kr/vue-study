<template>
  <div>
    Blog
    <div class="blog">
      <blog-detail v-if="$route.params.id && $route.params.title"></blog-detail>
      <blog-list v-else> ddd </blog-list>
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/blog/List.vue";
import BlogDetail from "@/components/blog/Detail.vue";

export default {
  name: "BlogPage",
  components: {
    BlogList: BlogList,
    BlogDetail: BlogDetail,
  },
};
</script>
