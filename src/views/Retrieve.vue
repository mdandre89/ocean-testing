<template>
  <div class="middlealign enable-select">
    <h1 class="subtitle-app"> {{ $t("general-website").enteridtext }} </h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="id"
        :rules="idRules"
        :counter="24"
        label="id"
        required
        outlined
      ></v-text-field>
      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
const ismongoId = (value) => /^[a-f\d]{24}$/i.test(value);

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

  data: () => ({
    valid:true,
    id: null,
    idRules: [
      (v) => !!v || "Name is required",
      (v) => v && ismongoId(v) || "It must be a valid mongo Id",
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const API =  process.env.NODE_ENV === "production"
          ? "https://oceanbackendapi.herokuapp.com"
          : "http://localhost:4000";
        axios
          .get(`${API}/test/${this.id}` )
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
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>