<template>
  <div class="tag">
    <router-link
      :to="{
        name: 'blogList',
        query: {
          tag: item.id,
        },
      }"
      v-for="item in tags"
      :key="item.id"
      >{{ item.name }}
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "postTag",

  data() {
    return {
      tags: null,
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.getTags();
    this.$store.dispatch("tags/getTags");
  },
  methods: {
    async getTags() {
      const { data } = await axios.get(
        "https://theme.sunflower.kr/wp-json/wp/v2/tags",
        {
          params: {
            post: this.id,
          },
        }
      );

      this.tags = data;
      // console.log(data);
    },
  },
};
</script>
