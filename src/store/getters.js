
const getters = {
  levels: ({ levels }) => levels,
  currentSlides ({ currentLevel }) {
    if (currentLevel) {
      return currentLevel.slides
    }

    return []
  },
  totalSlides (store, { currentSlides }) {
    return (currentSlides || []).length
  },
  currentSlide ({ currentSlideIndex }, { currentSlides }) {
    return currentSlides[currentSlideIndex]
  },
  currentGoal (store, { currentSlide }) {
    if (!currentSlide) {
      return null
    }
    return currentSlide.goal
  },
  slidesProgress ({ currentSlideIndex }, { totalSlides }) {
    if (!totalSlides) {
      return 0
    }
    return 100 * (currentSlideIndex + 1) / totalSlides
  },
  canPreviousSlide ({ currentSlideIndex }) {
    return currentSlideIndex > 0
  },
  canNextSlide ({ currentSlideIndex }, { currentSlide, totalSlides, isCurrentDrawingValid }) {
    const hasNext = currentSlideIndex + 1 < totalSlides
    if (!hasNext) {
      return false
    }

    const type = currentSlide ? currentSlide.type : 'none'
    switch (type) {
      case 'test':
        return isCurrentDrawingValid
      default:
        return true
    }
  },
  currentModel ({ currentLevel, models }, { getModelByName }) {
    if (!currentLevel) {
      return null
    }
    const { modelName } = currentLevel
    return models[modelName]
  },
  getModelByName: ({ models }) => name => models[name],
  isCurrentDrawingValid: ({ currentInterpretation }, { currentGoal }) => {
    return currentInterpretation === currentGoal
  }
}

export default getters
