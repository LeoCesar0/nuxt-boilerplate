import { describe, expect, test, it } from "vitest";
import { mount } from "@vue/test-utils";
import Form from "./index.vue";


describe("Run test", () => {
  test("If tests are working", () => {
    expect(true).toBe(true);
  });
});

describe("Testing Form Component", async () => {
  // await setup({});
  const wrapper = mount(Form);

  it("Should be a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Should find input email in form", () => {
    expect(wrapper.find('input[name="email"]').exists()).toBeTruthy();
  });

  it("Should NOT find input address in form", () => {
    expect(wrapper.find('input[name="address"]').exists()).toBeFalsy();
  });

  it("Should input name work properly", () => {
    const name = "John Doe";

    const input = wrapper.find<HTMLInputElement>('input[name="name"]');

    expect(input.exists()).toBeTruthy();
    expect(input.element).toBeTruthy();

    input.element.value = name;
    const results = wrapper.find(".results").text();

    const inputText =
      wrapper.find<HTMLInputElement>('input[name="name"]').element.value;


    expect(inputText).toContain(name);
  });

  // test("form submission validates password and confirmPassword", async () => {
  //   const name = "John Doe";
  //   const email = "john@example.com";
  //   const age = "25";
  //   const password = "password";
  //   const confirmPassword = "password";

  //   wrapper.find<HTMLInputElement>('input[name="name"]').element.value = name;
  //   wrapper.find<HTMLInputElement>('input[name="email"]').element.value = email;

  //   wrapper.find<HTMLInputElement>('input[name="age"]').element.value = age;

  //   wrapper.find<HTMLInputElement>('input[name="password"]').element.value =
  //     password;

  //   wrapper.find<HTMLInputElement>(
  //     'input[name="confirmPassword"]'
  //   ).element.value = confirmPassword;

  //   wrapper
  //     .find<HTMLFormElement>("form")
  //     .element.dispatchEvent(new Event("submit"));

  //   const results = wrapper.find(".results").text();

  //   expect(results).toContain(name);
  // });

  // test("validate age is a string of numbers", async ({ document }) => {
  //   const age = "twenty";
  //   document.querySelector('input[name="age"]').value = age;
  //   document.querySelector("form").dispatchEvent(new Event("submit"));

  //   expect(instance.nuxt.app.ageValid).toBe(false);
  // });
});
