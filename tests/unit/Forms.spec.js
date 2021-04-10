import Vue from "vue";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
Vue.use(Vuetify);
import Form from "@/components/Form.vue";
import Vuetify from "vuetify";
import { setupI18n } from "./i18n";
import VueRouter from "vue-router";

describe("Form.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  localVue.use(VueRouter);
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
    await wrapper.setProps({ fields: ["Name"] });
    const nameField = wrapper.find(".form-name");
    expect(nameField.exists()).toBe(true);
  });

  it("renders the submit and cancel buttons", () => {
    const wrapper = shallowMount(Form, { localVue, vuetify });

    const submitButton = wrapper.find(".form-submit");
    const clearButton = wrapper.find(".form-clear");
    expect(submitButton.exists()).toBe(true);
    expect(clearButton.exists()).toBe(true);
  });

  it("it emits the data we entered when submit is pressed", async () => {
    const localVue = createLocalVue();
    const i18n = setupI18n(localVue);
    const router = new VueRouter();
    localVue.use(VueRouter);
    const wrapper = mount(
      Form,
      { localVue, vuetify: new Vuetify(), i18n, router },
      {
        mocks: {
          $t: (key) => key,
        },
      },
      {
        stubs: ["router-link", "router-view"],
      }
    );
    const fields = ["Checkbox", "Sex", "Age", "Name"];
    await wrapper.setProps({ fields });
    const data = {
      sex: "male",
      checkbox: true,
      age: "22",
      name: "a-name",
    };

    const expectedEmittedData = {};
    ["Checkbox", "Sex", "Age", "Name", "Id"].forEach((field) => {
      expectedEmittedData[field.toLocaleLowerCase()] = data[field.toLocaleLowerCase()]
        ? data[field.toLocaleLowerCase()]
        : null;
    });

    await wrapper.setData(data);
    await wrapper.find(".form-submit").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().onSubmit).toBeTruthy();
    expect(wrapper.emitted().onSubmit[0][0]).toEqual(expectedEmittedData);
  });
});
