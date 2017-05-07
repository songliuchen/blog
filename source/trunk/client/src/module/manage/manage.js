import Tszs from 'vue'
import manage from '../../components/manage.vue'
import TszsRouter from 'vue-router'
import Routers from './router.config'
import '../../assets/css/common.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Tszs.use(Element)
Tszs.use(TszsRouter)
const router = new TszsRouter({
  mode: 'hash',
  routes: Routers
})

/* eslint-disable no-new */
new Tszs({
  el: '#app',
  router,
  render: h => h(manage)
})