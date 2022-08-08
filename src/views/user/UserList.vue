<template>
  <div>
    [total: {{ total }}} | page: {{ page }} ]
    <ul class="user-lst">
      <li v-for="item in UserList" :key="item.id">
        <div class="user-lst-cont">
          <router-link :to="{ name: 'userDetail', params: { id: item.id } }">
            <div>
              <span class="name">{{ item.first_name }}</span>
            </div>
            <div>
              {{ item.email }}
            </div>
            <div class="user-list-pic">
              <img :src="item.avatar" alt="picture" />
            </div>
          </router-link>
        </div>
      </li>
    </ul>
    <div class="paging">
      <router-link
        v-for="item02 in total_pages"
        :key="item02"
        :to="{ name: 'UserList', params: { page: item02 } }"
      >
        {{ item02 }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      UserList: null,
      page: 2,
      per_page: 5,
      total: 0,
      total_pages: 0,
    };
  },
  watch: {
    "$route.params.page"(value) {
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
      this.UserList = data.data; //allUserList 변수선언
      this.total = data.total;
      this.total_pages = data.total_pages;
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
    box-sizing: border-box;
    &:nth-child(n + 4) .user-lst-cont {
      border-top: 1px solid #f0f0f0;
    }
    .user-lst-cont {
      width: 250px;
      padding: 10px;
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
.paging {
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    background-color: #eee;
    color: #fff;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
  .router-link-exact-active {
    color: #000;
  }
}
</style>
