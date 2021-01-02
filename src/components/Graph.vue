<template>
  <v-container>
    <GChart
      type="ColumnChart"
      :options="{ ...chartOptions }"
      :data="chartData"
    ></GChart>
  </v-container>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name:'Graph',
  components: {
    GChart,
  },
  props: {
    chartData: {
      type: Array,
    },
  },
  data() {
    return {
      chartOptions: {
        height: 600,
        width: 1000,
        chartArea: { width: "90%", height: "90%", left: "20%" },
        legend: "none",
        vAxis: { minValue: 0, maxValue: 100, gridlines: { count: 4 } },
        hAxis: { textStyle: { fontSize: 12, fontName: "sans-serif" } },
        bar: { groupWidth: "70%" },
        backgroundColor: "#fafafa",
              animation:{
        duration: 1000,
        easing: 'out',
        startup: true
      },
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 14,
            color: "#000000",
          },
        },
      },
    };
  },
};
</script>

<style>

</style>