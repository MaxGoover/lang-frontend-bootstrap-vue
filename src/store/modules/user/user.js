
const getUserFromLocalStorage = () => {
  let user = {}
  user = JSON.parse(localStorage.getItem('user'))
  return user
}

export default {
  namespaced: true,
  state: {
    user: getUserFromLocalStorage() || {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    clearUser (state) {
      localStorage.removeItem('user')
      state.user = {}
    },
    setUser (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
    }
  },
  actions: {
    clearUser ({ commit }) {
      commit('clearUser')
    },
    setUser ({ commit }, payload) {
      commit('setUser', payload)
    }
  }
}
