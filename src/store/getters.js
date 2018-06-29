import brain from 'brain.js'

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
  canNextSlide ({ currentSlideIndex, currentDrawingValid }, { currentSlide, totalSlides, isValidDrawing }) {
    const hasNext = currentSlideIndex + 1 < totalSlides
    if (!hasNext) {
      return false
    }

    const type = currentSlide ? currentSlide.type : 'none'
    switch (type) {
      case 'test':
        return currentDrawingValid
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
  isValidDrawing: (store, { currentModel, currentGoal, getModelByName }) => vector => {
    if (!currentGoal) {
      console.log('No current goal')
      return false
    }
    if (!currentModel) {
      console.log('No current model')
      return false
    }

    const net = new brain.NeuralNetwork()
    net.fromJSON(currentModel.model)
    const interpretation = brain.likely(vector, net)
    console.log(`actual: ${interpretation}, expected: ${currentGoal}`)
    console.log(net.run(vector))
    return interpretation === currentGoal
  }
}

export default getters
