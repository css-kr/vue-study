<template>
  <div>
    <pre>{{ page }}</pre>

    <router-link :to="prev">prev</router-link>

    <router-link
      :to="{ name: 'blogList', query: { page: item } }"
      v-for="item in page.total_page"
      :key="item"
    >
      {{ item }}
    </router-link>

    <router-link :to="next" v-if="page.page < page.total_page"
      >next</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ListPagination",
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    prev() {
      return {};
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
