<template>
  <div style="text-align: left" class="list-wrap">
    <div v-for="item in posts" :key="item.id" class="list-item">
      <h2 class="item-tit">
        <router-link :to="{ name: 'blogDetail', params: { id: item.id } }">{{
          item.title.rendered
        }}</router-link>
      </h2>
      <!-- // TODO : XSS -->
      <div v-html="item.content.rendered" class="item-txt"></div>
      <div class="item-info">
        <span>{{ item.author }}</span>
        <span>{{ moment(item.date).format("yyyy-mm-dd") }}</span>
        <span>{{ item.categories }}</span>
        <span>{{ item.tags }}</span>
      </div>
    </div>
    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "blogList",
  data() {
    return {
      //선언
      posts: null,
    };
  },
  mounted() {
    this.getPost();
  },
  watch: {
    "$route.query"(value) {
      console.log("$route.query", value);
      this.getPost();
    },
  },
  methods: {
    async getPost() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/posts",
        {
          params: {
            per_page: 7,
            tags: this.$route.query.tag,
          },
        }
      );
      //통신 후 대입
      this.posts = data;
      console.log(data);
    },
  },
};
</script>
