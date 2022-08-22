<template>
  <div class="comt-wrap">
    <h2 class="comt-tit">Comments</h2>
    <!--v-if문의-->
    <div v-for="item in comments" :key="item.id" class="comt-txt">
      <div v-html="item.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "commentList",
  data() {
    return {
      //id: 0,
      comments: null,
      comment_per_page: 100,
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.getComment();
  },
  methods: {
    async getComment() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/comments",
        {
          params: {
            post: this.id,
            per_page: this.comment_per_page,
          },
        }
      );
      this.comments = data;
      console.log("comment", data);
    },
  },
};
</script>
