<template>
  <div v-if="userdt">
    <table>
      <thead>
        <tr>
          <th>first-name</th>
          <th>email</th>
          <th>avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ userdt.first_name }}</td>
          <td>{{ userdt.email }}</td>
          <td><img :src="userdt.avatar" alt="picture" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userdt: null,
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
      this.userdt = data.data;
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
</style>
