import Vue from 'vue'
import indexPage from '@/components/indexPage'

describe('indexPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(indexPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
