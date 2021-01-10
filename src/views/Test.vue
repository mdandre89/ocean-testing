<template>
  <v-container class="test">
    <v-progress-linear :value="progress" height="25" rounded color="light-blue">
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
    <Options
      v-for="j in Array.from({length: numberOfQuestions}, (item, index) => index)"
      :key="numberOfQuestions * currentPage + j"
      :text="testData[numberOfQuestions * currentPage + j]['text'][$root.$i18n.locale]"
      :index="numberOfQuestions * currentPage + j"
      @change2="listener"
    />
    <div class="navigation">
      <v-btn class="button-test" outlined color="primary" @click="paginate(-1)" :disabled="currentPage < 1">Back</v-btn>
      <v-btn class="button-test" 
        outlined 
        color="primary"
        v-if="currentPage < testData.length / numberOfQuestions - 1"
        @click="paginate(1)"
        
        >Next</v-btn>
      <v-btn class="button-test" outlined v-else @click="submit(1)" :loading="loading" :disabled="loading">Submit</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import Options from "@/components/Options.vue";
import { mapState } from 'vuex';

export default {
  name: "Test",
  components: {
    Options,
  },
  data() {
    return {
      currentPage: 0,
      numberOfQuestions: 5,
      loading: false,
      loader: null,
      progress: 0,
      movenext: true
    };
  },
  created(){
    this.progress =  (this.answered.size / this.testData.length) * 100
    this.movenext = this.answered.size/this.numberOfQuestions < this.currentPage + 1 && this.answered.size === 0
  },
  computed:{
    ...mapState(['sex', 'age', 'answered', 'testdata', 'language', 'testdata300', 'testType']),
    testData(){
      return this.testType === 'short' ?  this.testdata : this.testdata300
    }
  },
  methods: {
    listener(answer, index) {
      this.$store.commit("UPDATE_ANSWER", [index, answer]);
      this.$store.commit("UPDATE_ANSWERED", index);
      this.progress =  (this.answered.size / this.testData.length) * 100
      this.movenext = this.answered.size/this.numberOfQuestions < this.currentPage + 1 && this.answered.size >0
    },
    paginate(direction) {
      if (0 < this.currentPage < this.testData.length / this.numberOfQuestions) {
        this.currentPage += direction
        this.movenext = this.answered.size/this.numberOfQuestions < this.currentPage + 1 && this.answered.size >0
      }
    },
    submit() {
      if(!this.loader){
        this.loader = true
        const payload = {}
        const newtestdata = JSON.parse(JSON.stringify(this.testData))
        payload["testdata"] = newtestdata.map(facet=>{delete facet.text; return facet})
        payload["sex"] =  this.sex
        payload["age"] =  this.age
        payload["language"] =  this.language
        const API = process.env.NODE_ENV === 'production' ? 'https://oceanbackendapi.herokuapp.com' : 'http://localhost:4000';
        
        axios.post(`${API}/test`, payload)
          .then(response => {
            this.$store.dispatch("updateResults", response.data.finalResult)
            setTimeout(() => {
              this.loader = null
              if (this.$route.path != '/results') {
                this.$router.push({ path: `/results/${ response.data.info._id}` })
              }
              this.loading = false;
            }, 1000);
          })
          .catch(e => {
            console.log(e)
            this.errors.push(e)
            this.$router.push("/crashpage");
          }
        )
      }
    }
  },
  watch: {
    loader () {
      this.loading = true
    }
  }
};
</script>

<style>
.navigation {
  display: flex;
  justify-content: center;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.button-test{
    min-width: 100px!important;
    margin-right: 20px;
}
</style>
