<template>
  <div v-if="user">
    <table>
      <caption>
        사용자 정보
      </caption>
      <thead>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td><img :src="user.avatar" alt="picature" /></td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="pageBack()" class="btn-back" type="button">
      pageBack
    </button>
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
      this.data = null;
      const { data } = await axios.get(
        `https://reqres.in/api/users/${this.$route.params.id}`
      );
      this.user = data.data;
      console.log(data);
    },
    pageBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 600px;
  margin: 0 auto;
  caption {
    display: none;
  }
  thead {
    font-size: 13px;
    font-weight: 400;
    color: #000;
    text-align: center;
    padding: 15px 0;
    th {
      height: 50px;
      vertical-align: middle;
      border-bottom: 1px solid #ccc;
    }
  }
  tbody {
    td {
      height: 62px;
      padding: 10px 0;
      vertical-align: middle;
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
.btn-back {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 43px;
  padding: 0 14px;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  vertical-align: middle;
  text-shadow: none;
  background-color: #fff;
  margin-top: 20px;
}
</style>
