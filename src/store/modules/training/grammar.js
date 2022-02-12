import { axios } from '../../../axios'

export default {
  namespaced: true,
  state: {
    levels: []
  },
  getters: {},
  mutations: {
    setLevels (state, payload) {
      state.levels = payload
    }
  },
  actions: {
    getLevels ({ commit }) {
      this.commit('app/startLoading')
      axios.post('grammar/level/index')
        .then(
          response => { commit('setLevels', response.data) },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.commit('app/stopLoading') })
    }
  }
}
