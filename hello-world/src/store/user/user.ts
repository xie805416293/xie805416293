
export default ({
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    setdata(state, value) {
      state.count += 1;
    }
  },
  actions: {
  },
  modules: {
  }
})