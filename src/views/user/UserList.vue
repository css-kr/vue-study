<template>
  <div>
    total : {{ total }} page : {{ page }}
    <ul>
      <li v-for="item in userList" :key="item.id">
        <router-link :to="{ name: 'userDetail', params: { id: item.id } }">
          <div>{{ item.first_name }} {{ item.last_name }}</div>
          <!--          <div>{{ item.email }}</div>-->
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
      per_page: 4, //보여지는 아이템 갯수
      total: 0,
      total_pages: 0,
    };
  },
  watch: {
    "$route.params.page"(value) {
      console.log("바뀜", value);
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

      //console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}
li {
  list-style: none;
  width: 33.33%;
  margin-bottom: 30px;
}
.router-link-active {
  color: red;
}
</style>
