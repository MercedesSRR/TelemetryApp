<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<!--Body Area of chart window-->

<script setup>
import ChartItem from './ChartItem.vue'
import ColumnChart from './charts/ColumnChart.vue'
import PieChart from './charts/PieChart.vue'
import LineChart from './charts/LineChart.vue'
import ComboChart from './charts/ComboChart.vue'
</script>

<template>
  <ChartItem>
    <template #heading>Fishing</template>
    <template #chartSlot>
      <ColumnChart />
    </template>
  </ChartItem>
  
  <ChartItem>
    <template #heading>Steals</template>
    <template v-slot:chartSlot>
      <PieChart />
    </template>
  </ChartItem>

  <ChartItem>
    <template #heading>Slaps</template>
    <template v-slot:chartSlot>
      <LineChart />
    </template>
  </ChartItem>
  
  <ChartItem>
    <template #heading>Heatmap</template>
    <template v-slot:chartSlot>
      <ComboChart />
    </template>
  </ChartItem>
  
</template>
