import Vue from "vue";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
Vue.use(Vuetify);
import Form from "@/components/Form.vue";
import Vuetify from "vuetify";

describe("Form.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  localVue.use(Vuetify);

  it("renders the fields we want based on props", async () => {
    const wrapper = shallowMount(Form, { localVue, vuetify });
    await wrapper.setProps({ fields: ["Id"] });
    const idField = wrapper.find(".form-id");
    expect(idField.exists()).toBe(true);
    await wrapper.setProps({ fields: ["Checkbox"] });
    const checkboxField = wrapper.find(".form-checkbox");
    expect(checkboxField.exists()).toBe(true);
    await wrapper.setProps({ fields: ["Age"] });
    const ageField = wrapper.find(".form-age");
    expect(ageField.exists()).toBe(true);
    await wrapper.setProps({ fields: ["Sex"] });
    const sexField = wrapper.find(".form-sex");
    expect(sexField.exists()).toBe(true);
    await wrapper.setProps({ fields: ["Nickname"] });
    const nicknameField = wrapper.find(".form-nickname");
    expect(nicknameField.exists()).toBe(true);
  });

  it("renders the submit and cancel buttons", () => {
    const wrapper = shallowMount(Form, { localVue, vuetify });

    const submitButton = wrapper.find(".form-submit");
    const clearButton = wrapper.find(".form-clear");
    expect(submitButton.exists()).toBe(true);
    expect(clearButton.exists()).toBe(true);
  });

});
