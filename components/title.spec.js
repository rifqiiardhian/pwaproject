import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Title.vue'

describe('Title.vue', () => {
  it('renders props.msg ketika dilempar ke Component Title', () => {
    const msgProp = 'New Title'
    const wrapper = shallowMount(Title, {
        propsData: { 
            strtitle: msgProp 
        }
    })
    expect(wrapper.text()).toMatch(msgProp)
  })
})