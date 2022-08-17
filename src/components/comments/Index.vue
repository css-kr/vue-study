<template>
  <div>
    <div
      v-for="item in comments"
      :key="item.id"
      style="border: 1px solid red; margin: 10px; padding: 10px"
    >
      <div v-html="item.content.rendered"></div>
      000
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "commentList",
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
