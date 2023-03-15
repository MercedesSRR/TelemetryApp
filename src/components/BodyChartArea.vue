<!--Body Area of chart window-->

<script setup>
import ChartItem from './ChartItem.vue'
import ScatterChart from './charts/ScatterChart.vue'
import BarChart from './charts/BarChart.vue'
import PieChart from './charts/PieChart.vue'
import LineChart from './charts/LineChart.vue'
import HistogramChart from './charts/HistogramChart.vue'
import ComboChart from './charts/ComboChart.vue'
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

  <ChartItem>
    <template #heading>Line Chart</template>
    <template v-slot:chartSlot>
      <LineChart />
    </template>
  </ChartItem>

  <ChartItem>
    <template #heading>Histogram Chart</template>
    <template #chartSlot>
      <HistogramChart />
    </template>
  </ChartItem>
  
  <ChartItem>
    <template #heading>Combo Chart</template>
    <template v-slot:chartSlot>
      <ComboChart />
    </template>
  </ChartItem>
  
</template>
