<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

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
    <h1 class="message">{{ msg }}</h1>
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

.title h1,
.title h3 {
  text-align: center;
}
</style>
