import { mount } from "@vue/test-utils"
import HelloWorld from "../src/components/HelloWorld.vue"

// @vitest-environment happy-dom
test("mount component", async () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
        props:{
            msg: "Hello Prajwal",
        },
    });

    expect(wrapper.text()).toContain("Hello Prajwal");

});