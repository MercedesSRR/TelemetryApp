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
        <RouterLink to="/about">About</RouterLink>
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
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
