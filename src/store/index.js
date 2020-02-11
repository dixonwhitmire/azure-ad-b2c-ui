import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerSearchType: null
  },
  getters: {
    customerSearchType (state) {
      return state.customerSearchType
    }
  },
  mutations: {
    customerSearchType (state, payload) {
      state.customerSearchType = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
