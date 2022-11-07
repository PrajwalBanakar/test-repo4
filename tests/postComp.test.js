import { mount, shallowMount } from "@vue/test-utils"
import postComp from "../src/components/postComp.vue"
import PrimeVue from "primevue/config"
import { useConfirm } from 'primevue/useconfirm'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { useToast } from "primevue/usetoast"
import Tooltip from "primevue/tooltip"
import { expect, vi } from 'vitest'
import * as exports from '../src/components/postComp.vue'

// @vitest-environment happy-dom
describe("Post component tests", async () => {


test("Check post component", async () => {
    expect(postComp).toBeTruthy(); // To check if postComp exists or not
});

test("Check if tags exist", async () => {
    const wrapper = shallowMount(postComp, {
        global: {
            plugins:[PrimeVue, ConfirmationService, ToastService],
            components: { useConfirm, useToast },
            directives: {
                tooltip: Tooltip
            }
        }
    })
    expect(wrapper.find('button')).exists.toBeTruthy() // To check if button exists 

    expect(wrapper.find('h5')).exists.toBeTruthy() //To check if h5 tag exists
})

test("Check if resetForm function is called when reset button is clicked", async () => {
    
    const spy = (wrapper.vm.resetForm = vi.fn());
    const wrapper = shallowMount(postComp, {
        global: {
            plugins:[PrimeVue, ConfirmationService, ToastService],
            components: { useConfirm, useToast },
            directives: {
                tooltip: Tooltip
            }
        }
    })
    // const spy = vi.spyOn(wrapper.vm,'resetForm')
    // await wrapper.find('button').trigger('click')
    // expect(spy).toHaveBeenCalled()

    // const wrapper = mount(postComp);
    
    await(wrapper.find('button')).trigger('click');
    expect(spy).toHaveBeenCalled();



})


const sum = (a,b) => {
    return a+b
}
test('Sum function', ()=> {
    expect(sum(5,5)).toBe(10)
})

})