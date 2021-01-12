<template>
  <div class="home">
    <v-container class="middlealign">
      <h1>The Big FIVE PERSONALITY TEST (OCEAN)</h1>
      <h4>
        Measure your Openness to Experience, Conscientiousness, Extraversion,
        Agreeableness, Neuroticism
      </h4>
      <p>
        The big five personality traits are the best accepted and most commonly
        used model of personality in academic psychology. If you take a college
        course in personality psychology, this is what you will learn about. The
        big five come from the statistical study of responses to personality
        items. Using a technique called factor analysis researchers can look at
        the responses of people to hundreds of personality items and ask the
        question "what is the best was to summarize an individual?". This has
        been done with many samples from all over the world and the general
        result is that, while there seem to be unlimited personality variables,
        five stand out from the pack in terms of explaining a lot of a persons
        answers to questions about their personality: extraversion, neuroticism,
        agreeableness, conscientiousness and openness to experience. The
        big-five are not associated with any particular test, a variety of
        measures have been developed to measure them. This test uses the
        Big-Five Factor Markers from the International Personality Item Pool,
        developed by Goldberg (1992).
      </p>
      <v-row class="container-main-options">
        <v-col>
          <v-card class="mx-auto" max-width="344" outlined elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">The short version of IPIP-NEO</div>
                <v-list-item-title class="headline mb-1">
                  120 Questions
                </v-list-item-title>
                <v-list-item-subtitle> 10-20 minutes </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn outlined color="primary" text @click="setType('short')">
                Take the test
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            elevation="2"
            disabled
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  Original IPIP-NEO (WORK IN PROGRESS)
                </div>
                <v-list-item-title class="headline mb-1">
                  300 Questions
                </v-list-item-title>
                <v-list-item-subtitle> 30-40 minutes </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn outlined color="primary" text @click="setType('long')">
                Take the test
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="container-main-options">
        <ul>
          <li>
            Scientific Validity: research included factor analysis to identify
            the 5 traits of the OCEAN model.
          </li>
          <li>
            Free: the set of items was developed as a public domain alternative
            to NEO-PI
          </li>
          <li>Translated: available in more languages</li>
        </ul>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  title: 'The Big Five Personality Traits',
  name: "Home",
  methods: {
    setType(type) {
      this.$store.commit("UPDATE_TEST_TYPE", type);
      this.$store.commit("RESET_STATE");
      this.$router.push({ path: "/intro" });
    },
  },
};
</script>

<style>
.container-main-options {
  margin-top: 30px;
}
</style>