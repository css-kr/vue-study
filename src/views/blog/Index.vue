<template>
  <div style="text-align: left">
    blog

    <div v-for="item in posts" :key="item.id">
      <h2>
        <a :href="item.id">{{ item.title.rendered }}</a>
      </h2>

      <!-- // TODO : XXS -->
      <div v-html="item.content.rendered"></div>

      <hr />
    </div>

    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogIndex",
  data() {
    return {
      // 선언
      posts: null,
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/posts",
        {
          params: {
            per_page: 7,
          },
        }
      );

      // 통신 후 대입
      this.posts = data;

      console.log(data);
    },
  },
};
</script>
