/**
 * Created by zhousuntai on 2018/6/28.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules/modules'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state: {
    hasLogin: false,
    message: 'hello World my world'
  },
  modules: modules

})
export default store
