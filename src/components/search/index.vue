<template>
  <form @submit.prevent="search" style="border: 1px solid blue">
    <input type="search" v-model="context" />
    <button type="submit">search</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "postSearch",
  data() {
    return {
      context: null,
    };
  },
  watch: {
    "$route.query.search"(value) {
      this.context = value;
    },
  },
  mounted() {
    this.context = this.$route.query.search;

    if (this.context) {
      this.search();
    }
  },
  methods: {
    async search() {
      const { data, headers } = await axios.get(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/search`,
        {
          params: {
            search: this.context,
          },
        }
      );

      this.$router.push({
        name: "blogList",
        query: {
          search: this.context,
        },
      });

      this.$emit("onSearch", data, headers);

      console.log("----", data);
    },
  },
};
</script>
