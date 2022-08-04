<template>
  <div>
    total : {{ total }}<br />
    page : {{ page }}
    <ul>
      <li v-for="item in userList" :key="item.id">
        <router-link :to="{ name: 'userDetail', params: { id: item.id } }"
          >{{ item.email }}
          <img :src="item.avatar" alt="" />
        </router-link>
      </li>
    </ul>

    <div>
      <router-link
        v-for="item in total_pages"
        :key="item"
        :to="{ name: 'userList', params: { page: item } }"
        >{{ item }}</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: null,
      page: 1,
      per_page: 2,
      total: 0,
      total_pages: 0,
    };
  },
  watch: {
    "$route.params.page"(value) {
      console.log("---------", value);
      this.page = value;
      this.getUserList();
    },
  },
  mounted() {
    this.page = this.$route.params.page;
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data } = await axios.get("https://reqres.in/api/users", {
        params: {
          page: this.page,
          per_page: this.per_page,
        },
      });

      this.userList = data.data;
      this.total = data.total;
      this.total_pages = data.total_pages;

      console.log(data);
    },
  },
};
</script>

<style lange="scss" scoped>
.router-link-exact-active {
  color: red;
}
</style>
