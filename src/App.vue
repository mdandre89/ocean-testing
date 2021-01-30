<template>
  <v-app>
    <Topmenu />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Bottommenu />
  </v-app>
</template>

<script>
import Bottommenu from "./components/Bottommenu.vue";
import Topmenu from "./components/Topmenu";

export default {
  name: "App",
  metaInfo: {
      title: 'The Big Five Personality Traits',
      titleTemplate: '%s | Free Personality Test | OCEAN',
      meta: [
          { name: 'description', content:  'Find out your personality across five domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.'},
          { name: 'robots', content: 'index,follow'},
          { property: 'og:title', content: 'Free OCEAN personality test'},
          { property: 'og:description', content: 'Find out your personality across five domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.'},
          { property: 'og:site_name', content: 'The Big Five Personality Traits'},
          { property: 'og:type', content: 'website'},
          { vmid: 'og:url', property: 'og:url', content: 'https://bigfivepersonalitytraits.com'},

          {name: 'twitter:card', content: 'The Big Five'},
          {name: 'twitter:site', content: 'https://bigfivepersonalitytraits.com'},
          {name: 'twitter:title', content: 'The Big Five Personality Traits | Free Personality Test | OCEAN'},
          {name: 'twitter:description', content: 'Find out your personality across five domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.'},

          {itemprop: 'name', content: 'The Big Five Personality Traits | Free Personality Test | OCEAN'},
          { vmid: 'description', itemprop: 'description', content: 'Find out your personality across five domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.'}
      ],
      link: [
        {vmid: 'canonical', rel: 'canonical', href: 'https://bigfivepersonalitytraits.com'}
      ]
    },
  components: {
    Bottommenu,
    Topmenu
  }
};
</script>