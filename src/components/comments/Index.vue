<template>
  <comment-item :id="id" :comments="comments"></comment-item>
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
      comments: null,
      // id: 0,
    };
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },
  },

  mounted() {
    // this.id = this.$route.params.id;
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
            per_page: 100,
          },
        }
      );
      this.comments = data;

      console.log("comment", data);
    },
  },
};
</script>
