<template>
  <div id="app">
    <div class="header">
      <h1><router-link to="/">wordpress</router-link></h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{ name: 'blogList' }">blog</router-link>
      </nav>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
