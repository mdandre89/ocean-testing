<template>
  <v-container>
    <div class="question-text">{{text}}</div>
    <v-radio-group class="question-radio-group" v-model="testData[index].value">
      <v-radio color="red darken-3" v-for='i in [1,2,3,4,5]' :key="i" :label="renderText(i-1)" :value="i" @change="$emit('change2', i, index)"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>

export default {
  name: "Options",
    props:{
        text:{
            type: String
        },
        index:{
            type: Number
        }
    },
    computed:{
      testData(){
        return this.$store.state.testType === 'short' ?  this.$store.state.testdata : this.$store.state.testdata300      }
    },
  methods:{
      renderText(index){
        return this.$t("optionText")[index]
      }
  }
};
</script>