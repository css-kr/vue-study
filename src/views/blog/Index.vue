<template>
  <div>
    <div>
      <blog-detail v-if="$route.params.id && $route.params.title"></blog-detail>
      <blog-list v-else></blog-list>
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/blog/List";
import BlogDetail from "@/components/blog/Detail";
export default {
  name: "BlogPage",
  components: {
    BlogList: BlogList,
    BlogDetail: BlogDetail,
  },
};
</script>
