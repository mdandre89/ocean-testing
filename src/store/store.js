import description from "@/data/description.json";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    traits: ["A", "C", "E", "N", "O"],
    testdata: [],
    testdata300: [],
    resultsdata: {},
    description,
    name: "",
    sex: "male",
    age: 20,
    answered: new Set(),
    test_started: false,
    testType: "short",
  },
  mutations: {
    UPDATE_TESTDATA(state, data) {
      state.testdata = JSON.parse(JSON.stringify(data));
    },
    UPDATE_SEX(state, value) {
      state.sex = value;
    },
    UPDATE_NAME(state, value) {
      state.name = value;
    },
    UPDATE_AGE(state, value) {
      state.age = value;
    },
    UPDATE_TEST_STARTED(state, value) {
      state.test_started = value;
    },
    CREATE_RESULTS(state, value) {
      state.resultsdata = value;
    },
    UPDATE_ANSWER(state, value) {
      if (state.testType === "short") {
        state.testdata[value[0]]["value"] = value[1];
      } else {
        state.testdata300[value[0]]["value"] = value[1];
      }
    },
    UPDATE_ANSWERED(state, value) {
      state.answered.add(value);
    },
    UPDATE_TEST_TYPE(state, value) {
      state.testType = value;
    },
    RESET_STATE(state) {
      this.dispatch("updateTestData", "short");  //TODO HARDCODED use testType when other test is available
      state.resultsdata = {};
      state.sex = "male";
      state.age = 20;
      state.name = "";
      state.test_started = false;
      state.answered = new Set();
    },
  },
  actions: {
    updateResults({ commit }, value) {
      commit("CREATE_RESULTS", value);
    },
    updateTestData({ commit }, type) {
      const API =
        process.env.NODE_ENV === "production"
          ? "https://oceanbackend.onrender.com"
          : "http://localhost:4000";

      const test = type === "short" ? "testdata" : "testdata300";
      let mutation = type === "short" ? "UPDATE_TESTDATA" : "UPDATE_TESTDATA300";
      axios.get(`${API}/${test}`).then((response) => {
        commit(mutation, response.data);
      });
    }
  },
});
