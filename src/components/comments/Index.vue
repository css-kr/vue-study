<template>
  <div>
    <comment-item :id="id" :comments="comments"></comment-item>
  </div>
</template>

<script>
import commentItem from "./comment";
import axios from "axios";
export default {
  name: "commentList",
  components: {
    commentItem: commentItem,
  },
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
            order: "asc",
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
