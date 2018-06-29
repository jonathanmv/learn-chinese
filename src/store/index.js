import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import levels from './levels'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentLevel: null,
    currentSlideIndex: 0,
    currentDrawingValid: false,
    levels,
    models: {}
  },
  getters,
  mutations,
  actions
})

export default store
