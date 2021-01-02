<template>
  <div class="results" v-if="Object.keys(this.$store.state.resultsdata).length > 0">
    <p class="text-center id-text">Save this id to retrieve this report in the future: <b>{{$route.params.id}}</b></p>
    <Graph :chartData="prepareTraits" class="trait-chart"/>
    <v-container v-for="(facet, index) in $store.state.traits" :key="index + facet">
      <DescriptionCard 
      class="description-card"
      :info="translation[language]['traitMapping'][facet]" 
      :score="$store.state.resultsdata['traits'][facet].score" 
      :HML="$store.state.resultsdata['traits'][facet].HML" 
      :description="description[facet].description" 
      :shortdescription="description[facet].shortdescription" 
      />
    </v-container>

    <div class="text-center">Detailed View</div>
    <v-container v-for="trait in $store.state.traits" :key="trait">
      <v-divider></v-divider>
      <p class="trait-detailed-view">{{translation[language]["traitMapping"][trait] }}</p>
      <Graph :chartData="prepareFacets(trait)" />
      <ul>
        <li v-for="i in [1,2,3,4,5,6]" :key="i">
          <p>{{ description[trait+i] }}</p> 
          <p>Your level is {{ scoretext($store.state.resultsdata['groupedFacets'][trait][trait+i].HML) }}</p>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
import baseColours from "@/data/graphcolors.json";
import DescriptionCard from "@/components/DescriptionCard.vue";
import Graph from "@/components/Graph.vue";
import { mapState } from 'vuex';

export default {
  name: "Results",
  components: {
    Graph,
    DescriptionCard
  },
  beforeCreate: function(){
    if(Object.keys(this.$store.state.resultsdata).length === 0){
      this.$router.push("/test");
    }
  },
  computed: {
    ...mapState(['resultsdata', 'translation', 'language', 'description']),
    prepareTraits() {
      const traitData = [
        [
          this.translation[this.language]["general-website"]["legend" ][0],
          this.translation[this.language]["general-website"]["legend"][1],
          { role: "style" },
          { type: "string", role: "annotation" },
        ],
        ...this.$store.state.traits.map((item)=> {
          let value = parseInt(this.$store.state.resultsdata["traits"][item].score);
          return [
            this.translation[this.language]["traitMapping"][item],
            value,
             `color: ${baseColours[item][0]}; opacity: 0.80`,
             value.toString()
           ]
        })
      ];
      return traitData;
    },
  },
  methods: {
    prepareFacets(trait) {
      let keyFacets = Object.keys(this.$store.state.resultsdata["groupedFacets"][trait])
      const traitData = [
        [
          this.translation[this.language]["general-website"]["legend"][0],
          this.translation[this.language]["general-website"]["legend"][1],
          { role: "style" },
          { type: "string", role: "annotation" },
        ],
        ...keyFacets.map((facet, i) => {
          let value = parseInt(this.$store.state.resultsdata["groupedFacets"][trait][facet].score);
          return [
            this.translation[this.language]["facetMapping"][facet],
            value,
            `color: ${baseColours[trait][i]}; opacity: 0.80`,
             value.toString(),
          ];
        }),
      ];
      return traitData;
    },
    scoretext(score){
      if(score <= 55 && score >= 45){
        return 'Neutral'
      }
      return (score > 65 || score < 35 ? 'Very' : '') + " " + (score > 55 ? 'High' : 'Low')
    }
  },
};
</script>

<style>
.trait-detailed-view{
  margin: 30px 0 20px 0;
  font-size: 25px;
}
.transition-fast-in-fast-out.v-card--reveal.v-card.v-sheet.theme--light{
  min-height: 100%;
  height: auto!important;
}
.intro-text{
  margin-top: 20px;
}
.id-text{
  font-size: 18px;
  margin: 60px 0 0px 0;
}
.trait-chart{
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>