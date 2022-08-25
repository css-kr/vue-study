<template>
  <div style="text-align: left">
    <div v-for="item in posts" :key="item.id">
      <h2>
        <router-link :to="{ name: 'blogDetail', params: { id: item.id } }">{{
          item.title.rendered
        }}</router-link>
      </h2>
      <!-- // TODO : XSS -->
      <div v-html="item.content.rendered"></div>
      <tag-list :items="item.tags"></tag-list>
      <hr />
    </div>
    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>

<script>
import axios from "axios";
import tagList from "@/components/tags/tag";

export default {
  name: "blogList",
  components: {
    tagList: tagList,
  },
  data() {
    return {
      //선언
      posts: null,
      tags: [],
    };
  },
  mounted() {
    this.getPost();
  },
  watch: {
    "$route.query"(value) {
      console.log("$route.query", value);
      this.getPost();
    },
  },
  methods: {
    async getPost() {
      const { data } = await axios(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/posts`,
        {
          params: {
            per_page: 7,
            tags: this.$route.query.tag,
          },
        }
      );
      //통신 후 대입
      this.posts = data;
      console.log(data);
    },
  },
};
</script>
