<template>
  <div>
    <h2 class="user-index">Hello ReqRes users!</h2>
    <div v-if="$route.params.id && user">user email : {{ user.email }}</div>
    <div v-else>
      <ul class="user-lst">
        <li v-for="item in userList" :key="item.id">
          <router-link :to="{ name: 'user', params: { id: item.id } }">
            <dl>
              <dt>
                {{ item.last_name + item.first_name }}
              </dt>
              <dd>
                {{ item.email }}
              </dd>
              <dd class="user-lst-pic">
                <img :src="item.avatar" alt="picture" />
              </dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //노드 모듈에서 가져온다

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

      console.log(data);
      this.getUserDetail();
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

<style lang="scss" scoped>
h2 {
  font-size: 26px;
}
.user-lst {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  list-style: none;
  padding: 0px;
  li {
    flex: 1 1 0;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 10px 5px 5px #eee;

    dl {
      text-decoration: none;
    }
  }
}
</style>
