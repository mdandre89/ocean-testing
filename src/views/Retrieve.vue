<template>
  <div class="middlealign enable-select">
    <h3> {{ $t("general-website").enteridtext }} </h3>
    <form>
      <v-text-field
        v-model="id"
        :error-messages="idErrors"
        :counter="24"
        label="id"
        required
        outlined
        @input="$v.id.$touch()"
        @blur="$v.id.$touch()"
      ></v-text-field>
      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const ismongoId = (value) => /^[a-f\d]{24}$/i.test(value);
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  title: 'Access your personality report - The Big Five Personality Traits',
  mixins: [validationMixin],
  validations: {
    id: { required, ismongoId },
  },

  data: () => ({
    id: null,
  }),

  computed: {
    idErrors() {
      const errors = [];
      if (!this.$v.id.$dirty) return errors;
      !this.$v.id.ismongoId && errors.push("It must be a valid mongo Id");
      !this.$v.id.required && errors.push("Id is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const API = process.env.NODE_ENV === 'production' ? 'https://oceanbackendapi.herokuapp.com' : 'http://localhost:4000';
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
      this.$v.$reset();
      this.id = null;
    },
  },
};
</script>

<style>
</style>