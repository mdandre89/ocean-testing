<template>
  <div class="middlealign text-container" v-if="Object.keys(this.$store.state.resultsdata).length > 0">
    <h1 class="text-center id-text">Save this id to retrieve this report in the future: <b>{{$route.params.id}}</b></h1>
    <Graph :chartData="prepareTraits" class="trait-chart"/>
    <v-container v-for="(facet, index) in $store.state.traits" :key="index + facet">
      <DescriptionCard 
      class="description-card"
      :info="$t(facet)" 
      :score="$store.state.resultsdata['traits'][facet].score" 
      :HML="$store.state.resultsdata['traits'][facet].HML" 
      :description="description[facet].description" 
      :shortdescription="description[facet].shortdescription" 
      />
    </v-container>

    <h2 class="text-center">Detailed View</h2>
    <v-container v-for="trait in $store.state.traits" :key="trait">
      <v-divider></v-divider>
      <p class="trait-detailed-view">{{$t(trait)}}</p>
      <Graph :chartData="prepareFacets(trait)" />
      <div v-for="i in [1,2,3,4,5,6]" :key="i">
        <p>{{ description[trait+i] }}</p> 
        <p>Your level is {{ scoretext($store.state.resultsdata['groupedFacets'][trait][trait+i].HML) }}</p>
      </div>
    </v-container>
  </div>
</template>

<script>
import DescriptionCard from "@/components/DescriptionCard.vue";
import baseColours from "@/data/graphcolors.json";
import Graph from "@/components/Graph.vue";
import { mapState } from 'vuex';



export default {
  name: "Results",
    metaInfo: {
    title: 'Your Results - The Big Five Personality Traits',
    meta: [
        { name: 'description', content: 'Analyze yor results across five domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.' },
        { vmid: 'og:url', property: 'og:url', content: 'https://bigfivepersonalitytraits.com/results' },
    ],
    link: [
      { vmid: 'canonical', rel: 'canonical', href: 'https://bigfivepersonalitytraits.com/results'}
    ]
  },
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
    ...mapState(['resultsdata', 'language', 'description']),
    prepareTraits() {
      const traitData = [
        [
          this.$t('general-website').legend[0],
          this.$t('general-website').legend[1],
          { role: "style" },
          { type: "string", role: "annotation" },
        ],
        ...this.$store.state.traits.map((item)=> {
          let value = parseInt(this.$store.state.resultsdata["traits"][item].score);
          return [
            this.$t(item),
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
          this.$t('general-website').legend[0],
          this.$t('general-website').legend[1],
          { role: "style" },
          { type: "string", role: "annotation" },
        ],
        ...keyFacets.map((facet, i) => {
          let value = parseInt(this.$store.state.resultsdata["groupedFacets"][trait][facet].score);
          return [
            this.$t(facet),
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