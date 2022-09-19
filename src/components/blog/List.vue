<template>
  <div>
    <div v-for="post in posts" :key="post.id" style="text-align: left">
      <h2>
        <router-link
          :to="{
            params: {
              name: 'blog',
              id: post.id,
              title: post.title.rendered,
            },
          }"
          >{{ post.title.rendered }}</router-link
        >
      </h2>
      <div v-html="post.content.rendered"></div>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogList",
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    this.getPostList();
  },
  methods: {
    async getPostList() {
      const { data } = await axios.get(
        "https://theme.sunflower.kr/wp-json/wp/v2/posts"
      );
      this.posts = data;
      console.log(data);
    },
  },
};
</script>
