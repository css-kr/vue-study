<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>
      <ul>
        <li v-for="item in user" :key="item.id">{{ item.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //노드 모듈에서 가져온다

export default {
  data() {
    return {
      user: null,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data } = await axios.get("https://reqres.in/api/users");
      this.user = data.data;

      console.log(data);
    },
  },
};
</script>
