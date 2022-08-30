<template>
  <div v-if="tags.length > 0">
    tag :
    <span v-for="(item, index) in tags" :key="item.id">
      <span v-if="index !== 0">/</span>
      <router-link
        :to="{
          name: 'blogList',
          query: { tag: item.id },
        }"
      >
        {{ item.name }}
      </router-link>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "tagList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getTag: "tags/getTags",
    }),
    tags() {
      const items = [];

      this.items.forEach((tag) => {
        items.push(this.getTag.find((v) => v.id === tag));
      });
      return items; //.join(",");
    },
  },
  mounted() {},
  methods: {},
};
</script>
