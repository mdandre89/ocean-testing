import Vue from 'vue'
import { createLocalVue, mount } from "@vue/test-utils";
Vue.use(Vuetify)
import Footer from "@/components/Footer.vue";
import Vuetify from "vuetify";

describe("Footer.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  localVue.use(Vuetify)

  it("renders right title and date when passed", () => {
    const wrapper = mount(Footer, { localVue, vuetify });
    const msg = `${new Date().getFullYear()} — The Big Five Personality Traits`;
    const text = wrapper.find('.v-card__text')
    expect(text.text()).toBe(msg);
  });
});
