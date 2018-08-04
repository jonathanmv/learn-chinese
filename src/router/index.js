import Vue from 'vue'
import Router from 'vue-router'
import Lesson from '@/components/Lesson'
import Roadmap from '@/components/screen/Roadmap'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Roadmap', component: Roadmap },
    { path: '/level/*', component: Lesson }
  ]
})
