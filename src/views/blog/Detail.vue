<template>
  <div>
    <div v-if="post">
      <header>
        <h2>{{ post.title.rendered }}</h2>
        <div>
          {{ moment(post.date).format("yyyy-mm-DD") }}
        </div>
      </header>
      <div v-html="post.content.rendered"></div>

      <hr />
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "blogDetail",
  data() {
    return {
      post: null,
      id: 72,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data } = await axios.get(
        `https://theme.sunflower.kr/wp-json/wp/v2/posts/${this.id}`
      );

      this.post = data;

      // console.log(this);

      console.log(data);
    },
  },
};
</script>
