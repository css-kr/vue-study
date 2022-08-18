<template>
  <div v-if="commentTag">
    <div v-for="item in commentTag" :key="item.id">{{ item.name }}</div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "commentTag",
  data() {
    return {
      commentTag: null,
      // id: 0,
    };
  },

  props: {
    id: {
      // type: Number,
      // default: 0,
    },
  },

  mounted() {
    // this.id = this.$route.params.id;
    this.getComment();
  },
  methods: {
    async getComment() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/tags",
        {
          params: {
            post: this.id,
            // per_page: 100,
          },
        }
      );
      this.commentTag = data;
      console.log("tag", data);
    },
  },
};
</script>
