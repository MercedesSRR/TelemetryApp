<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<!--Body Area of chart window-->

<script setup>
  import ChartItem from './ChartItem.vue'
  import ColumnChart from './charts/ColumnChart.vue'
  import PieChart from './charts/PieChart.vue'
  import LineChart from './charts/LineChart.vue'
  import ComboChart from './charts/ComboChart.vue'
  import Controller from '../../plugins/controller'
  import ScatterChart from './charts/ScatterChart.vue'
  //import Heatmap from './charts/Heatmap.vue'

  // class BodyChartArea extends Controller{

  //   constructor(name, subComponentList = []) {
  //     super( name, subComponentList )
  //     this.vm = {
  //       charts:[
  //         { title: "Fishing", typeOfChart: ColumnChart},
  //         { title: "Steals", typeOfChart: PieChart},
  //         { title: "Slaps", typeOfChart: LineChart},
  //         { title: "Heatmap", typeOfChart: ComboChart}
  //       ]
  //     }
  //   }
  // }

  // export default new BodyChartArea('BodyChartArea')

</script>

<template>
  <!-- <section v-for="(item, i) in charts" :key="i">
    <ChartItem>
      <template #heading>{{ item.title }}</template>
      <template #chartSlot>{{ item.typeOfChart }}</template>
    </ChartItem>
  </section> -->

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
      <ScatterChart />
    </template>
  </ChartItem>
  
</template>
