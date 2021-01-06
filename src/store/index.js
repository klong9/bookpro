import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    bookarr: []
  },
  getters: {

  },
  mutations: {
    AddModify: function (state, str) {
      state.bookarr.unshift(str);
      console.log(state.bookarr);

    },

  },
  actions: {

  }
})
export default store
