<template>
  <v-card
    outlined
    class="mx-auto"
  >
    <v-card-text>
      <p class="description-card-title">
        {{info}}
      </p>
      <p>Your score: {{parseInt(score)}} -- {{scoretext(parseInt(HML))}}</p>
      <div class="text--primary">
        {{shortdescription}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        outlined
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p>{{description}}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            outlined
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: "DescriptionCard",
    props:{
        shortdescription:{
          type: String
        },
        info: {
            type: String
        },
        score: {
            type: Number
        },
        HML: {
            type: Number
        },
        description: {
            type: String
        }
    },
    data: () => ({
      reveal: false,
    }),
    methods:{
      scoretext(score){
        if(score <= 55 && score >= 45){
          return 'Neutral'
        }
        return (score > 65 || score < 35 ? 'Very' : '') + " " + (score > 55 ? 'High' : 'Low')
      }
    }
  }
</script>