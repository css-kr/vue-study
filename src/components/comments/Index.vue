<template>
  <div>
    <comment-item :id="id" :comments="comments"></comment-item>

    <form method="POST" @submit.prevent="commentSubmit">
      <p>
        이름 <input type="text" name="name" v-model="commentForm.author_name" />
      </p>
      <p>이메일 <input type="email" v-model="commentForm.author_email" /></p>
      <p>내용 <textarea v-model="commentForm.content"></textarea></p>

      <p>
        <button type="button">reset</button>
        <button type="submit">submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      // id: 0,
      commentForm: {
        // parent: 0,
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
  }, //스토어

  mounted() {
    // this.id = this.$route.params.id;
    console.log("store", this.commentParent);
    this.getComment();
  },

  methods: {
    ...mapActions({
      setCommentParent: "comments/setParent",
    }),

    async getComment() {
      const { data } = await axios(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/comments`,
        {
          params: {
            order: "asc",
            post: this.id,
            per_page: 100,
          },
        }
      );
      this.comments = data;

      console.log("comment", data);
    },

    async commentSubmit() {
      console.log("-------------");
      const { data } = await axios.post(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/comments`,
        {
          parent: this.commentParent,
          post: this.id,
          author_name: this.commentForm.author_name,
          author_email: this.commentForm.author_email,
          content: this.commentForm.content,
        }
      );

      //this.commentForm.parent = 0; // 댓글 위치 리셋시켜줌

      this.setCommentParent(0);

      this.formReset();

      this.getComment();

      console.log("commentsubmit", data);
    },

    formReset() {
      this.commentForm = {
        // parent: 0,
        post: this.id,
        author_name: "",
        author_email: "",
        content: "",
      };
    },

    clickReply({ commentId }) {
      this.commentForm.parent = commentId;
      console.log("====================!!!", commentId);
    },
  },
};
</script>
