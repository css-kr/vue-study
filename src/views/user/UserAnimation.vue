<template>
  <div v-if="user">
    <slick
      id="slick-user"
      ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
      @breakpoint="handleBreakpoint"
      @destroy="handleDestroy"
      @edge="handleEdge"
      @init="handleInit"
      @reInit="handleReInit"
      @setPosition="handleSetPosition"
      @swipe="handleSwipe"
      @lazyLoaded="handleLazyLoaded"
      @lazyLoadError="handleLazeLoadError"
    >
      <div v-for="item in user" :key="item.id">
        <div class="user-cont">
          <div class="user-pic"><img :src="item.avatar" alt="picture" /></div>
          <div class="user-name">{{ item.last_name }}</div>
        </div>
      </div>
    </slick>
  </div>
</template>

<script>
import axios from "axios";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

export default {
  components: {
    Slick,
  },
  data() {
    return {
      user: null,
      id: null,
      per_page: 12,
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
      },
    };
  },
  mounted() {
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
      this.user = data.data;
      console.log(data);
    },
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    },
  },
};
</script>

<style lang="scss">
/* scoped를 삭제해야 slick css가 적용된다 */
#slick-user {
  button {
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
  .user-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
