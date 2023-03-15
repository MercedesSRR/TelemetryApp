<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <img src="./assets/Images/Walrus.png" width="100" height="90">
      <SideBar msg="Fishy Business" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/charts">Charts</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
  background-color: #f85454;
}

.wrapper {
  padding: 20px;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-top: 2rem;
  text-align: left;
}

nav :hover {
  background-color: #bb1d1d;
}

</style>
