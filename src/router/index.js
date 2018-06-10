import Vue from 'vue'
import Router from 'vue-router'
import TrainPage from '@/components/TrainPage'
import ShapesPage from '@/components/ShapesPage'
import Heng from '@/components/chinese/strokes/Heng'
import Shu from '@/components/chinese/strokes/Shu'
import HengShuWords from '@/components/chinese/words/HengShu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShapesPage',
      component: ShapesPage
    },
    {
      path: '/train',
      name: 'TrainPage',
      component: TrainPage
    },
    {
      path: '/chinese/strokes/heng',
      name: 'heng',
      component: Heng
    },
    {
      path: '/chinese/strokes/shu',
      name: 'shu',
      component: Shu
    },
    {
      path: '/chinese/words/heng-shu',
      name: 'hengShuWords',
      component: HengShuWords
    }
  ]
})
