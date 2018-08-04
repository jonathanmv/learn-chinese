const getPathName = ({ path }) => {
  const name = path && path.length ? path.slice(1) : null
  return name
}

const getLevelWithPathName = (store, name) => {
  return store.getters.levels.find(({pathName}) => pathName === name)
}

const setCurrentLevelIfNone = ({ to, from, next }, store) => {
  const pathName = getPathName(to)
  const matchLevel = getLevelWithPathName(store, pathName)
  if (matchLevel && !store.currentLevel) {
    store.commit('setCurrentLevel', matchLevel)
    const { modelName } = matchLevel
    store.dispatch('loadModel', modelName)
  }
  next()
}

const apply = ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    setCurrentLevelIfNone({to, from, next}, store)
  })
}

const rules = { apply }

export default rules
