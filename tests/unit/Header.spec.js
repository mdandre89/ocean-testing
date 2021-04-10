import Vue from "vue";
import { createLocalVue, shallowMount} from "@vue/test-utils";
Vue.use(Vuetify);
import Header from "@/components/Header.vue";
import Vuetify from "vuetify";
import { setupI18n } from "./i18n";
import VueRouter from 'vue-router'

describe("Header.vue", () => {
  const localVue = createLocalVue();
  const i18n = setupI18n(localVue);
  const router = new VueRouter()
  let vuetify;
  localVue.use(VueRouter)
  localVue.use(Vuetify)

  const wrapper = shallowMount(
    Header,
    { localVue, vuetify, i18n, router}
  );

  it("renders the result title and link", () => {
    const resultButton = wrapper.find('.results')
    const msg = `See your report`;
    expect(resultButton.text()).toBe(msg);
    expect(resultButton.attributes('to')).toBe('/results')
  });

  it("renders Logo title and link", () => {
    const logo = wrapper.find('.website-logo')
    const msg = `Big Five personality traits`;
    expect(logo.text()).toBe(msg);
    expect(logo.attributes('to')).toBe('/')
  });

  it("Navigation menu and Language component are present in the header", () => {
    const languageStub = wrapper.find('languagemenu-stub')
    const navigationMenu = wrapper.find('navigationmenu-stub')
    expect(languageStub.html()).toBe('<languagemenu-stub></languagemenu-stub>');
    expect(navigationMenu.html()).toBe('<navigationmenu-stub></navigationmenu-stub>');
  });
});
