<template>
  <div>
    <div v-if="post" style="text-align: left">
      <header>
        <h2>{{ post.title.rendered }}</h2>
        <div>{{ moment(post.date).format("yyyy-mm-dd") }}</div>
      </header>
      <div v-html="post.content.rendered"></div>
      <hr />
      <comment-list :id="id"></comment-list>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import axios from "axios";
import comment from "@/components/comments/Index";

export default {
  name: "blogDetail",
  components: {
    commentList: comment,
  },
  data() {
    return {
      post: null,
      id: 0,
    };
  },
  mounted() {
    console.log(this.id);
    this.id = Number(this.$route.params.id);
    console.log(this.id);
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data } = await axios.get(
        `https://theme.sunflower.kr/wp-json/wp/v2/posts/${this.id}`
      );
      this.post = data;
    },
  },
};
</script>
