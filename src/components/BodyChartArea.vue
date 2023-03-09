<script setup>
import ChartItem from './ChartItem.vue'
import ScatterChart from './charts/ScatterChart.vue'
import BarChart from './charts/BarChart.vue'
import PieChart from './charts/PieChart.vue'


</script>

<template>
  <ChartItem>
    <template #heading>Bar Chart</template>
    <template #chartSlot>
      <BarChart />
    </template>
  </ChartItem>
  
  <ChartItem>
    <template #heading>Pie Chart</template>
    <template v-slot:chartSlot>
      <PieChart />
    </template>
  </ChartItem>

  <ChartItem>
    <template #heading>Scatter Chart</template>
    <template v-slot:chartSlot>
      <ScatterChart />
    </template>
  </ChartItem>
</template>
