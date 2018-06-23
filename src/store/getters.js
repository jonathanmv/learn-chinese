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
  slidesProgress ({ currentSlideIndex }, { totalSlides }) {
    if (!totalSlides) {
      return 0
    }
    return 100 * (currentSlideIndex + 1) / totalSlides
  },
  canPreviousSlide ({ currentSlideIndex }) {
    return currentSlideIndex > 0
  },
  canNextSlide ({ currentSlideIndex }, { totalSlides }) {
    // TODO Include validation on current slide test
    return currentSlideIndex + 1 < totalSlides
  }
}

export default getters
