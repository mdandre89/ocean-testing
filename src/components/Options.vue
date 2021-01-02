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
          return this.$store.state.translation[this.$store.state.language]["optionText"][index]
      }
  }
};
</script>

<style>
.v-progress-linear{
  margin: 10px 0 0 0;
}
.v-input--radio-group__input{
    justify-content:space-between;
}
.question-text{
  font-size: 22px;
}
.v-input--radio-group__input>.v-label{
  color: black;
}
@media only screen and (min-width: 992px) {
  .v-input--radio-group__input {
    flex-direction: row!important;
  }
}
</style>