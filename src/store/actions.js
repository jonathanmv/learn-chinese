import router from '../router'
import brain from 'brain.js'

export default {
  setCurrentLevel ({ commit, dispatch }, level) {
    commit('setCurrentLevel', level)
    const { pathName: name, modelName } = level
    router.push({ name })
    if (modelName) {
      dispatch('loadModel', modelName)
    }
  },
  loadModel ({ commit, getters }, modelName) {
    const model = getters.getModelByName(modelName)
    if (model) {
      // Model has been loaded already
      return Promise.resolve()
    } else {
      commit('modelLoading', { modelName })
      return import(`./models/${modelName}.json`)
        .then(model => commit('modelLoaded', { modelName, model }))
        .catch(error => commit('modelNotLoaded', { modelName, error }))
    }
  },
  closeLesson ({ commit }) {
    commit('closeLesson')
    const name = 'Roadmap'
    router.push({ name })
  },
  previousSlide ({ commit }) {
    commit('previousSlide')
  },
  nextSlide ({ commit }) {
    commit('nextSlide')
  },
  levelCompleted ({ dispatch }) {
    dispatch('closeLesson')
  },
  evaluateVector ({ commit, state }, vector) {
    const { currentNet } = state
    if (!currentNet) {
      console.log('No current net')
      return
    }

    const interpretation = brain.likely(vector, currentNet)
    commit('setCurrentInterpretation', interpretation)
  }
}
