<template>
  <ul class="user-lst">
    <li v-for="item in userList" :key="item.id">
      <div class="user-lst-cont">
        <router-link :to="{ name: 'userDetail', params: { id: item.id } }">
          <div>
            <span class="name">{{ item.last_name }}</span>
            <span class="name">{{ item.first_name }}</span>
          </div>
          <div>
            {{ item.email }}
          </div>
          <div class="user-lst-pic">
            <img :src="item.avatar" alt="picture" />
          </div>
        </router-link>
      </div>
    </li>
  </ul>
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

<style lang="scss" scoped>
h2 {
  font-size: 26px;
}
.user-lst {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center;*/
  li {
    display: inline-flex;
    justify-content: center;
    width: calc(100% / 3);
    padding: 10px;
    box-sizing: border-box;
    border-radius: 12px;
    &:nth-child(n + 4) {
      border-top: 1px solid #f0f0f0;
    }
    .user-lst-cont {
      width: 250px;
      div {
        color: #000;
        &:not(:first-child) {
          margin-top: 10px;
        }
        .name {
          &:not(:first-child) {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
