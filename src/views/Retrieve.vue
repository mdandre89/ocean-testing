<template>
  <div class="middlealign enable-select">
    <h1 class="subtitle-app"> {{ $t("general-website").enteridtext }} </h1>
    <Form @onSubmit="onSubmit" :fields="['Id']"/>
  </div>
</template>

<script>
import axios from "axios";
import Form from "@/components/Form.vue";

export default {
  metaInfo: {
    title: 'Access your personality report - The Big Five Personality Traits',
    meta: [
        { vmid: 'description', name: 'description', content:  'Retrieve your results about the five psychological domains: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.' },
        { vmid: 'og:url', property: 'og:url', content: 'https://bigfivepersonalitytraits.com/results' },
    ],
    link: [
      { vmid: 'canonical', rel: 'canonical', href: 'https://bigfivepersonalitytraits.com/results'}
    ]
  },
  components:{
    Form
  },
  methods: {
    onSubmit(payload) {
      const API =  process.env.NODE_ENV === "production"
        ? "https://cyan-outrageous-hummingbird.cyclic.app"
        : "http://localhost:4000";
      axios
        .get(`${API}/test/${payload.id}` )
        .then((response) => {
          this.$store.dispatch("updateResults", response.data.finalResult);
          setTimeout(() => {
              this.$router.push({
                path: `/results/${response.data.info._id}`,
              });
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
          this.$router.push("/crashpage");
        });
    }
  },
};
</script>