<template>
  <div>
    <div v-if="post">
      <h2>{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered"></div>
    </div>

    <div v-else>Loading ...</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BlogDetail",
  data() {
    return {
      post: null,
    };
  },

  mounted() {
    this.getPostDetail();
  },

  methods: {
    async getPostDetail() {
      const { data } = await axios.get(
        `https://theme.sunflower.kr/wp-json/wp/v2/posts/${this.$route.params.id}`
      );

      this.post = data;

      //console.log(data);
    },
  },
};
</script>
