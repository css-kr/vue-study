<template>
  <div>tag : {{ tags }}</div>
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
        items.push(this.getTag.find((v) => v.id === tag).name);
      });

      return items.join(",");
    },
  },
  mounted() {
    console.log("333333", this.getTag);
  },
  methods: {},
};
</script>
