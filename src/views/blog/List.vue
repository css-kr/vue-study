<template>
  <div class="list">
    <div v-for="item in posts" :key="item.id" class="list-item">
      <h3 class="h3">
        <router-link
          :to="{
            name: 'blogDetail',
            params: {
              id: item.id,
            },
          }"
          >{{
            item.title.rendered ? item.title.rendered : item.title
          }}</router-link
        >
      </h3>

      <!-- TODO : XSS -->
      <div
        v-if="item.content"
        v-html="item.content.rendered"
        class="content"
      ></div>

      <tag-list :items="item.tags"></tag-list>
    </div>

    <post-search @onSearch="search"></post-search>

    <list-pagination :page="page"></list-pagination>
    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>
<script>
import axios from "axios";
import tagList from "@/components/tags/tag";
import listPagination from "@/components/pagination/Index";
import postSearch from "@/components/search/index";

export default {
  name: "blogList",
  components: {
    tagList: tagList,
    listPagination: listPagination,
    postSearch: postSearch,
  },
  data() {
    return {
      //선언
      posts: null,
      tags: [],
      page: {
        per_page: 3,
        page: 1,
        total: 0,
        total_page: 0,
      },
    };
  },

  mounted() {
    this.page.page = Number(this.$route.query.page) || 1;

    if (!this.$route.query.search) {
      this.getPost();
    }
  },

  watch: {
    "$route.query.page"(value) {
      this.page.page = Number(this.$route.query.page) || 1;
      console.log("$route.query", value);
      this.getPost();
    },
    "$route.query.search"(value) {
      if (!value) {
        this.getPost();
      }
    },
  },

  methods: {
    async getPost() {
      const { data, headers } = await axios(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/posts`,
        {
          params: {
            page: this.page.page,
            per_page: this.page.per_page,
            tags: this.$route.query.tag,
          },
        }
      );

      this.page.total = Number(headers["x-wp-total"]);
      this.page.total_page = Number(headers["x-wp-totalpages"]);

      // console.log("headers", this.page);

      //통신 후 대입
      this.posts = data;
    },

    search(data, headers) {
      console.log("search", data, headers);

      this.posts = data;
      this.page.total = Number(headers[`x-wp-total`]);
      this.page.total_page = Number(headers[`x-wp-totalpages`]);
    },
  },
};
</script>
