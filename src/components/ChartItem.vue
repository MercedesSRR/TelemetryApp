<template>
  <div class="chartArea">
    <div class= "details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot name="chartSlot"></slot>
    </div>
  </div>
</template>

<style scoped>
.chartArea {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  height: fit-content;
  margin: 12px;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0rem;
  color: var(--color-heading);
}
</style>
