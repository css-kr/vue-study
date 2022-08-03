<template>
  <div>
    <ul>
      <li v-for="item in userList" :key="item.id">
        <router-link :to="{ name: 'userDetail', params: { id: item.id } }"
          >{{ item.email }}
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

      console.log(data);
    },
  },
};
</script>
