import Vue from 'vue'
import Router from 'vue-router'
import Heng from '@/components/level/Heng'
import Roadmap from '@/components/screen/Roadmap'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Roadmap', component: Roadmap },
    { path: '/level/heng', name: 'level/heng', component: Heng }
  ]
})
