<template>
  <div>
    <div v-for="item in posts" :key="item.id">
      <h2>
        <router-link
          :to="{
            name: 'blogDetail',
            params: {
              id: item.id,
            },
          }"
          >{{ item.title.rendered }}</router-link
        >
      </h2>

      <!-- // TODO : XSS -->
      <div v-html="item.content.rendered"></div>

      <div>
        {{ setTag(item.tags) }}
      </div>

      <tag-list :items="item.tags"></tag-list>

      <hr />
    </div>

    <!--    <pre>{{ posts }}</pre>-->
  </div>
</template>

<script>
import axios from "axios";
import tagList from "@/components/tags/tag";

export default {
  name: "blogList",
  components: {
    tagList: tagList,
  },
  data() {
    return {
      // 선언
      posts: null,
      tags: [],
    };
  },
  mounted() {
    this.getPost();

    const a = this.$store.state.tags.items;
    console.log("@@@@@-----", a);
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

      // 통신 후 대입
      this.posts = data;
    },
    setTag(tags) {
      const storeTags = this.$store.state.tags.items;
      const tag = [];
      tags.forEach((v) => {
        console.log(v, storeTags);
        console.log("000000", storeTags.find((t) => t.id === v)?.name);
        tag.push(storeTags.find((t) => t.id === v)?.name);
      });

      return tag;
    },
  },
};
</script>
