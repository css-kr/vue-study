<template>
  <div>
    <div v-if="post" style="text-align: left">
      <header>
        <h2>{{ post.title.rendered }}</h2>
        <div>{{ moment(post.data).format("yyyy-mm-dd") }}</div>
      </header>
      <div v-html="post.content.rendered"></div>
      <tags :id="id"></tags>
      <tag-list :items="post.tags"></tag-list>
      <hr />
      <comment-list :id="id"></comment-list>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import axios from "axios";
import comment from "@/components/comments/Index";
import tags from "@/components/tags/Index";
import tagList from "@/components/tags/tag";

export default {
  name: "blogDetail",
  components: {
    commentList: comment,
    tags: tags,
    tagList: tagList,
  },
  data() {
    return {
      post: null,
      id: 0,
    };
  },
  mounted() {
    this.id = Number(this.$route.params.id);
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data } = await axios.get(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/posts/${this.id}`
      );
      this.post = data;
    },
  },
};
</script>
