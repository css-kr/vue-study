<template>
  <div v-if="user">
    <div>{{ user.first_name }} {{ user.last_name }}</div>
    <img :src="user.avatar" :alt="user.first_name" />
    <div>
      email :
      <a :href="`mailto: ${user.email}`">{{ user.email }}</a>
    </div>
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
