<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.4rem;
}

h3 {
  font-size: 1.2rem;
}

.green {
  font-family: "Mynerve", sans-serif;
}

.title h1,
.title h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    text-align: left;
  }
}
</style>
