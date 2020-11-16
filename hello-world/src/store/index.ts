import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
console.log(user);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCase: '1'
  },
  mutations: {
  },
  getters: {
    VilbleEnter: (state) => {
      if (state.showCase) {
        return true;
      } else {
        return false;
      }
    }
  },
  actions: {
  },
  modules: {
    user
  }
})
