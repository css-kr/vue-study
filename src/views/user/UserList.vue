<template>
  <div>
    <ul>
      <li v-for="item in userList" :key="item.id">
        <router-link :to="{ name: 'userDetail', params: { id: item.id } }">
          <div>{{ item.first_name }} {{ item.last_name }}</div>
          <!--          <div>{{ item.email }}</div>-->
          <img :src="item.avatar" alt="" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: null,
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data } = await axios.get("https://reqres.in/api/users");

      this.userList = data.data;
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
</style>
