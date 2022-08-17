<template>
  <div v-if="comt_tag">
    tag:
    <div v-for="item in comt_tag" :key="item.id">{{ item.id }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "commentTag",
  data() {
    return {
      comt_tag: null,
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.getTagName();
  },
  methods: {
    async getTagName() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/tags",
        {
          params: {
            post: this.id,
          },
        }
      );
      this.comt_tag = data;
      console.log("tag", data);
    },
  },
};
</script>
