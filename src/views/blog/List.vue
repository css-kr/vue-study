<template>
  <div>
    <div v-for="item in posts" :key="item.id">
      <h2>
        <router-link
          :to="{
            name: 'blogDetail',
            params: {
              id: item.id,
            },
          }"
          >{{ item.title.rendered }}</router-link
        >
      </h2>

      <!-- // TODO : XSS -->
      <div v-html="item.content.rendered"></div>

      <!--      <div>-->
      <!--        {{ setTag(item.tags) }}-->
      <!--      </div>-->

      <tag-list :items="item.tags"></tag-list>

      <hr />
    </div>

    <list-pagination :page="page"></list-pagination>

    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>

<script>
import axios from "axios";
import tagList from "@/components/tags/tag";
import listPagination from "@/components/pagination/Index";

export default {
  name: "blogList",
  components: {
    tagList: tagList,
    listPagination: listPagination,
  },
  data() {
    return {
      // 선언
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
    this.getPost();
  },
  watch: {
    "$route.query"(value) {
      this.page.page = Number(this.$route.query.page) || 1;
      console.log("$route.query", value);
      this.getPost();
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

      console.log(this.page);

      // 통신 후 대입
      this.posts = data;
    },
    setTag(tags) {
      const storeTags = this.$store.state.tags.items;
      const tag = [];
      tags.forEach((v) => {
        tag.push(storeTags.find((t) => t.id === v)?.name);
      });

      return tag;
    },
  },
};
</script>
