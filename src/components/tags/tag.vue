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
        console.log(tag);
        console.log("1111", this.getTag.find((v) => v.id === tag).name);
        items.push(this.getTag.find((v) => v.id === tag).name);
      });

      return items.join(", ");
    },
  },
  mounted() {
    console.log("wowwow", this.getTag);
  },
  methods: {},
};
</script>
