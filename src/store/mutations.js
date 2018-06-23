export default {
  setCurrentLevel (state, level) {
    state.currentLevel = level
    state.currentSlideIndex = 0
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
  }
}
