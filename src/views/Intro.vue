<template>
  <div class="middlealign text-container">
    <ul>
      <li>
        <p>
          This report estimates the individual's level on each of the five broad
          personality domains of the Five-Factor Model.
        </p>
      </li>
      <li>
        <p>
          The description of each one of the five broad domains is followed by a
          more detailed description of personality according to the six
          subdomains that comprise each domain.
        </p>
      </li>
      <li>
        <p>
          These broad domains cover normal differences in personality that
          should be obvious to people who know you well.
        </p>
      </li>
      <li>
        <p>
          The inventory does not reveal hidden, secret information about you nor
          does it assess serious psychological disorders.
        </p>
      </li>
      <li>
        <p>
          The report is designed to be objective, not pleasing or flattering.
        </p>
      </li>
      <li>
        <p>
          Measurement error, misunderstandings, carelessness, and mischievous
          responding can invalidate the report.
        </p>
      </li>
      <li>
        <p>
          If knowledgeable acquaintances disagree with the test results, then
          the results are wrong.
        </p>
      </li>
      <li>
        <p>
          Your numerical scores are reported and graphed as percentile
          estimates. For example, a score of '60' means that your level on that
          trait is estimated to be higher than 60% of persons of your sex and
          age. Please keep in mind that 'low,' 'average,' and 'high' scores on a
          personality test are neither absolutely good nor bad.
        </p>
      </li>
    </ul>
    <Form @onSubmit="onSubmit" :fields="['Nickname','Sex', 'Age', 'Checkbox']"/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  metaInfo: {
    title: 'Test - The Big Five Personality Traits',
    titleTemplate: '%s | Free Personality Test',
    meta: [
        { vmid: 'description', name: 'description', content: 'Start the free test to find out your 5 traits: Openness to Experience, Conscientiousness, Extraversion, Neuroticism and Agreeableness.' },
        { vmid: 'og:url', property: 'og:url', content: 'https://bigfivepersonalitytraits.com/intro' },
    ],
    link: [
      { vmid: 'canonical', rel: 'canonical', href: 'https://bigfivepersonalitytraits.com/intro'}
    ]
  },
  components:{
    Form
  },

  methods: {
    onSubmit(payload) {
      if (this.$route.path != "/test") {
        let {sex, name, age, checkbox} = payload
        this.$store.commit("UPDATE_SEX", sex);
        this.$store.commit("UPDATE_NAME", name);
        this.$store.commit("UPDATE_AGE", age);
        this.$store.commit("UPDATE_TEST_STARTED", checkbox);
        this.$router.push({ path: `/test` });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>