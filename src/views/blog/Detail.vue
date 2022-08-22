<template>
  <div>
    <div v-if="post" style="text-align: left" class="detail-wrap">
      <header>
        <h2 class="detail-tit">{{ post.title.rendered }}</h2>
        <div class="detail-date">
          {{ moment(post.date).format("yyyy-mm-dd") }}
        </div>
      </header>
      <div v-html="post.content.rendered" class="detail-cont"></div>
      <tags :id="id" class="detail-tag"></tags>
      <comment-list :id="id" class="detail-comt"></comment-list>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import axios from "axios";
import comment from "@/components/comments/Index";
import tags from "@/components/tags/Index";

export default {
  name: "blogDetail",
  components: {
    commentList: comment,
    tags: tags,
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
