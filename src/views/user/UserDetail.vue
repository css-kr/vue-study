<template>
  <div v-if="user">
    user email : {{ user.email }}
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.getUserDetail();
  },
  methods: {
    async getUserDetail() {
      const { data } = await axios.get(
        `https://reqres.in/api/users/${this.$route.params.id}`
      );
      this.user = data.data;
    },
  },
};
</script>
