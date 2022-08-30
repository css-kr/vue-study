<template>
  <div>
    <pre>{{ page }}</pre>

    <router-link :to="prev" v-if="page.page > 1">prev</router-link>

    <router-link
      :to="{ name: 'blogList', query: { page: item } }"
      v-for="item in page.total_page"
      :key="item"
      >{{ item }}</router-link
    >

    <router-link :to="next" v-if="page.page < page.total_page"
      >next</router-link
    >
  </div>
</template>

<script>
export default {
  name: "listPagination",
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    prev() {
      let prevPage = this.page.page - 1;
      console.log("prevPage:", prevPage);
      if (prevPage < 1) {
        prevPage = 1;
      }
      return { name: "blogList", query: { page: prevPage } };
    },
    next() {
      let nextPage = this.page.page + 1;
      if (nextPage >= this.page.total_page) {
        nextPage = this.page.total_page;
      }
      return { name: "blogList", query: { page: nextPage } };
    },
  },
};
</script>
