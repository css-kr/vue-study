<template>
  <div>
    <comment-item :id="id" :comments="comments"></comment-item>
    <form method="POST" @submit.prevent="commentSubmit">
      <p>
        이름 <input type="text" name="name" v-model="commentForm.author_name" />
      </p>
      <p>
        이메일 <input type="email" name="emal" v-model="commentForm.content" />
      </p>
      <p>
        내용<textarea name="content" v-model="commentForm.content"></textarea>
      </p>
      <p><button type="submit" @click="formReset">submit</button></p>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import commentItem from "./comment";
import axios from "axios";

export default {
  name: "commentList",
  components: {
    commentItem: commentItem,
  },
  data() {
    return {
      comments: null,
      comment_per_page: 100,
      commentForm: {
        post: 0,
        author_name: "",
        author_email: "",
        content: "",
      },
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters({
      commentParent: "comments/getParent",
    }),
  },
  mounted() {
    this.getComment();
  },
  methods: {
    ...mapActions({
      setCommentParent: "comments/setParent",
    }),
    async getComment() {
      const { data } = await axios(
        "https://theme.sunflower.kr/wp-json/wp/v2/comments",
        {
          params: {
            post: this.id,
            per_page: this.comment_per_page,
          },
        }
      );
      this.comments = data;
    },
    async commentSubmit() {
      const { data } = await axios.post(
        "https://theme.sunflower.kr/wp-json/wp/v2/comments",
        {
          parent: this.commentParent,
          post: this.id,
          author_name: this.commentForm.author_name,
          author_email: this.commentForm.author_email,
          content: this.commentForm.content,
        }
      );
      this.setCommentParent(0);
      this.formReset();
      this.getComment();
      console.log(data);
    },
    formReset() {
      this.commentForm = {
        post: this.id,
        author_name: "",
        author_email: "",
        content: "",
      };
    },
    reply({ commentId }) {
      this.commentForm.parent = commentId;
    },
  },
};
</script>
