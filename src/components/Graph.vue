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
  componentDidmount () {
    window.addEventListener('resize', this.getWidth)
  },
  componentWillUnmount () {
    window.removeEventListener('resize', this.getWidth)
  },
  data() {
    return {
      chartOptions: {
        height: 600,
        width: this.getWidth,
        chartArea: { width: "100%", height: "90%" },
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
  computed:{
    getWidth () {
      const chartWidth = window.innerWidth * 0.70
      console.log(chartWidth)
      return chartWidth
    }
  }
};
</script>

<style>
div[dir~="ltr"]{
  margin: 0 auto;
}
</style>