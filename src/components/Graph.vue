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
        width: this.getWidth,
        height: window.innerWidth < 650 ? 300 : 600,
        chartArea: { width: "100%", height: "70%" , top: 20},
        legend: "none",
        vAxis: { minValue: 0, maxValue: 100, gridlines: { count: 4 } },
        hAxis: { textStyle: { fontName: "sans-serif", fontSize: window.innerWidth < 650 ? 11 : 14 } },
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
      console.log(window.innerWidth)
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