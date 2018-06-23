import router from '../router'

export default {
  setCurrentLevel ({ commit }, level) {
    commit('setCurrentLevel', level)
    const { pathName: name } = level
    router.push({ name })
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
  }
}
