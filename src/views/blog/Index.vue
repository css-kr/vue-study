<template>
  <div>
    blog
    <div class="blog">
      <blog-detail v-if="$route.params.id && $route.params.title"></blog-detail>
      <blog-list v-else></blog-list>
      <!--      {{ posts }}-->
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

<style lang="scss"></style>
