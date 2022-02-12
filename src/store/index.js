import app from './modules/app/app'
import authorization from './modules/auth/authorization'
import grammar from './modules/training/grammar'
import shop from './modules/shop/shop'
import training from './modules/training/training'
import user from './modules/user/user'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app,
    authorization,
    grammar,
    shop,
    training,
    user
  }
})
