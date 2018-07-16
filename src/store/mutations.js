import Vue from 'vue'
export default {
  setCurrentLevel (state, level) {
    state.currentLevel = level
    state.currentSlideIndex = 0
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
