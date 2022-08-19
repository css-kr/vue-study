<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'blogList' }">Blog</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
