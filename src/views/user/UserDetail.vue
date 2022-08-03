<template>
  <div v-if="user">
    id: {{ user.id }}<br />
    user email : {{ user.email }}<br />

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
      console.log(data);

      this.user = data.data;
    },
  },
};
</script>
