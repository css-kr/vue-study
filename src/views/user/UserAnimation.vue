<template>
  <div v-if="user">
    <slick
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
      class="slick-wrap"
    >
      <img src="@/assets/logo.png" alt="picture" />
      <img src="@/assets/logo.png" alt="picture" />
      <img src="@/assets/logo.png" alt="picture" />
      <!--      <ul v-for="item in user" :key="item.id">
        <li><img :src="item.avatar" alt="picture" /></li>
      </ul>-->
    </slick>
  </div>
</template>

<script>
import axios from "axios";
import Slick from "vue-slick";

export default {
  components: {
    Slick,
  },
  data() {
    return {
      user: null,
      id: null,
      slickOptions: {
        slidesToShow: 3,
      },
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data } = await axios.get("https://reqres.in/api/users");
      this.user = data.data;
    },
    /*next() {
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
    },*/
  },
};
</script>

<style lang="scss" scoped>
.slick-wrap {
  height: 500px;
  .slide-pic {
    border: 1px solid red;
  }
}
</style>
