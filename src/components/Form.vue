<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-if="checkField('Nickname')"
      class="form-nickname"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Nickname"
      required
      outlined
    ></v-text-field>
    <v-select
      v-if="checkField('Sex')"
      class="form-sex"
      v-model="sex"
      :items="items"
      :rules="sexRules"
      label="Sex"
      outlined
      required
    ></v-select>
    <v-text-field
      v-if="checkField('Age')"
      class="form-age"
      v-model="age"
      :rules="ageRules"
      label="age"
      required
      outlined
      type="number"
    ></v-text-field>
    <v-text-field
      v-if="checkField('Id')"
      class="form-id"
      v-model="id"
      :rules="idRules"
      :counter="24"
      label="id"
      required
      outlined
    ></v-text-field>
    <v-checkbox
      v-if="checkField('Checkbox')"
      class="form-checkbox"
      v-model="checkbox"
      :rules="checkboxRules"
      label="I understand the general purpose of this test"
      required
    ></v-checkbox>
    <v-btn class="mr-4 form-submit" @click="submit"> submit </v-btn>
    <v-btn class="form-clear" @click="clear"> clear </v-btn>
  </v-form>
</template>

<script>
const ismongoId = (value) => /^[a-f\d]{24}$/i.test(value);

export default {
  name: "Form",
  props: {
    fields: {
      type: Array,
      default: ()=>[]
    },
  },
  data: () => ({
    valid: true,
    age: "",
    sex: null,
    id: null,
    name: "",
    items: ["male", "female"],
    checkbox: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) =>
        (v && v.length <= 10) || "Nickname must be less than 10 characters",
      (v) => (v && v.length >= 2) || "Name must be at least 2 characters",
    ],
    sexRules: [(v) => !!v || "Sex is required"],
    ageRules: [
      (v) => !!v || "Age is required",
      (v) => (v && v < 95) || "Age must be less than 95",
      (v) => (v && v > 10) || "Age must be more than 10",
    ],
    checkboxRules: [(v) => !!v || "You must agree to continue!"],
    idRules: [
      (v) => !!v || "Name is required",
      (v) => (v && ismongoId(v)) || "It must be a valid mongo Id",
    ],
  }),
  methods: {
    checkField(field) {
      return this.fields.includes(field);
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit("onSubmit", {
          age: this.age,
          sex: this.sex,
          checkbox: this.checkbox,
          name: this.name,
          id: this.id,
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>