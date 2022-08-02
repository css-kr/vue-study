<template>
  <div>
    user index
    <div v-if="$route.params.id && user">user email : {{ user.email }}</div>
    <div v-else>
      <ul>
        <li v-for="item in userList" :key="item.id">
          <router-link :to="{ name: 'user', params: { id: item.id } }"
            >{{ item.email }}
            <img :src="item.avatar" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: null,
      user: null,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getUser();
  },
  watch: {
    "$route.params.id"() {
      console.log("--------");
      this.getUser();
    },
  },
  methods: {
    getUser() {
      if (this.$route.params.id) {
        this.getUserDetail();
      } else {
        this.getUserList();
      }
    },
    async getUserList() {
      const { data } = await axios.get("https://reqres.in/api/users");

      this.userList = data.data;

      console.log(data.data);
    },
    async getUserDetail() {
      const { data } = await axios.get(
        "https://reqres.in/api/users/" + this.$route.params.id
      );
      console.log(data);

      this.user = data.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
