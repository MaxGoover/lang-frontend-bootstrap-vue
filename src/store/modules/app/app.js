export default {
  namespaced: true,
  state: {
    loading: false,
    showAppHeader: true,
    showAppFooter: true,
    showDialog: false
  },
  getters: {
    showDialog: state => state.showDialog
  },
  mutations: {
    setShowAppHeader (state, payload) {
      state.showAppHeader = payload
    },
    setShowAppFooter (state, payload) {
      state.showAppFooter = payload
    },
    setShowDialog (state, payload) {
      state.showDialog = payload
    },
    startLoading (state) {
      state.loading = true
    },
    stopLoading (state) {
      state.loading = false
    }
  },
  actions: {}
}
