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
      <list_tag :id="id"></list_tag>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import axios from "axios";
import comment from "@/components/comments/Index";
import list_tag from "@/components/comments/Tag";

export default {
  name: "blogDetail",
  components: {
    commentList: comment,
    list_tag: list_tag,
  },
  data() {
    return {
      post: null,
      id: 0,
    };
  },
  mounted() {
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
