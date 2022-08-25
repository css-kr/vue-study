<template>
  <div class="view">
    <div v-if="post">
      <h3 class="h3">
        {{ post.title.rendered }}
      </h3>
      <div class="date">{{ moment(post.date).format("yyyy-mm-DD") }}</div>

      <div v-html="post.content.rendered" class="content"></div>

      <tags></tags>
      <tag-list :items="post.tags"></tag-list>

      <comment-list :id="id"></comment-list>
    </div>
    <div v-else>loading</div>
  </div>
</template>
<script>
import axios from "axios";
import comment from "@/components/comments/Index";
import tags from "@/components/tags/Index";
import tagList from "@/components/tags/tag";

export default {
  name: "blogDetail",

  data() {
    return {
      post: null,
      id: 0,
    };
  },

  components: {
    commentList: comment,
    tags: tags,
    tagList: tagList,
  },

  mounted() {
    this.id = Number(this.$route.params.id);

    // console.log(this.id);
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data } = await axios.get(
        `https://theme.sunflower.kr/wp-json/wp/v2/posts/${this.id}`
      );
      this.post = data;

      // console.log(data);
    },
  },
};
</script>
