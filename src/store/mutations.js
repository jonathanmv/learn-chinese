import Vue from 'vue'
import brain from 'brain.js'

const mutations = {
  setCurrentLevel (state, level) {
    state.currentLevel = level
    state.currentSlideIndex = 0
    mutations.setCurrentNetBasedOnCurrentLevel(state)
  },
  setCurrentNetBasedOnCurrentLevel (state) {
    const { modelName } = state.currentLevel
    const model = state.models[modelName]
    if (model) {
      const net = new brain.NeuralNetwork()
      net.fromJSON(model.model)
      state.currentNet = net
    }
  },
  setCurrentNet (state, net) {
    state.currentNet = net
  },
  closeLesson (state) {
    state.currentLevel = null
    state.currentSlideIndex = 0
  },
  nextSlide (state) {
    state.currentSlideIndex++
  },
  previousSlide (state) {
    state.currentSlideIndex = Math.max(0, state.currentSlideIndex - 1)
  },
  modelLoaded (state, { model, modelName }) {
    Vue.set(state.models, modelName, model)
    mutations.setCurrentNetBasedOnCurrentLevel(state)
  },
  modelLoading (state, { modelName }) {
    Vue.set(state.models, modelName, { loading: true })
  },
  modelNotLoaded (state, { modelName, error }) {
    Vue.set(state.models, modelName, { error })
  },
  setCurrentDrawingValid (state, isValid) {
    state.currentDrawingValid = isValid
  },
  setCurrentInterpretation (state, interpretation) {
    state.currentInterpretation = interpretation
  }
}

export default mutations
