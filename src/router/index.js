import Vue from 'vue'
import Router from 'vue-router'
import TrainPage from '@/components/TrainPage'
import ShapesPage from '@/components/ShapesPage'
import Heng from '@/components/chinese/strokes/Heng'
import Shu from '@/components/chinese/strokes/Shu'
import HengShuWords from '@/components/chinese/words/HengShu'
import Roadmap from '@/components/screens/Roadmap'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ShapesPage', component: ShapesPage },
    { path: '/train', name: 'TrainPage', component: TrainPage },
    { path: '/chinese', name: 'Roadmap', component: Roadmap },
    { path: '/chinese/strokes/heng', name: 'level/heng', component: Heng },
    { path: '/chinese/strokes/shu', name: 'level/heng-shu', component: Shu },
    { path: '/chinese/words/heng-shu', name: 'hengShuWords', component: HengShuWords }
  ]
})
