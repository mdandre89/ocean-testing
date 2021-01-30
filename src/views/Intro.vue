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
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Nickname"
        required
        outlined
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-select
        v-model="sex"
        :items="items"
        :error-messages="selectErrors"
        label="Sex"
        outlined
        required
        @change="$v.sex.$touch()"
        @blur="$v.sex.$touch()"
      ></v-select>
      <v-text-field
        v-model="age"
        :error-messages="ageErrors"
        label="age"
        required
        outlined
        type="number"
        @input="$v.age.$touch()"
        @blur="$v.age.$touch()"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="I understand the general purpose of this test"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  between,
  maxLength,
  minLength,
  required,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
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
  validations: {
    name: { required, maxLength: maxLength(20), minLength: minLength(2) },
    age: { required, between: between(10, 95) },
    sex: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    age: "",
    sex: null,
    name: "",
    items: ["male", "female"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.sex.$dirty) return errors;
      !this.$v.sex.required && errors.push("Please select your sex");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at least 2 characters long");
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    ageErrors() {
      const errors = [];
      if (!this.$v.age.$dirty) return errors;
      !this.$v.age.between &&
        errors.push("Age must be between 10 and 95 years");
      !this.$v.age && errors.push("Must be valid age");
      !this.$v.age.required && errors.push("Age is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.$route.path != "/test") {
          this.$store.commit("UPDATE_SEX", this.sex);
          this.$store.commit("UPDATE_NAME", this.name);
          this.$store.commit("UPDATE_AGE", this.age);
          this.$store.commit("UPDATE_TEST_STARTED", this.checkbox);
          this.$router.push({ path: `/test` });
        }
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.age = "";
      this.sex = null;
      this.checkbox = false;
    },
  },
};
</script>