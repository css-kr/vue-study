<template>
  <div v-if="comments" class="comment">
    <div
      v-for="item in comments.filter((value) => {
        return value.parent === parent;
      })"
      :key="item.id"
      class="comment-item"
    >
      <div>{{ item.author_name }}</div>
      <div v-html="item.content.rendered"></div>

      <comment-item
        :id="id"
        :parent="item.id"
        :comments="comments"
      ></comment-item>
    </div>
  </div>
</template>

<script>
import commentItem from "./comment";

export default {
  name: "commentItem",

  components: {
    commentItem: commentItem,
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },

    parent: {
      type: Number,
      default: 0,
    },

    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
