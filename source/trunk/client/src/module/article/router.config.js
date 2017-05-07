/**
 * Created by Administrator on 2016/10/9.
 */
import technology from '../../components/technology/container.vue'
import technologydetail from '../../components/technology/detailcontainer.vue'

import demo from '../../components/demo/container.vue'
import demodetail from '../../components/demo/detailcontainer.vue'

import story from '../../components/story/container.vue'
import storydetail from '../../components/story/detailcontainer.vue'

import about from '../../components/about/container.vue'
import notfound from '../../components/404.vue'

export default [
{path:'',name:'', component: technology},

{path:'/technology',name:'technology', component: technology},
{path:'/technologydetail',name:'technologydetail', component: technologydetail}, 

{path:'/demo', name:'demo',component:demo},
{path:'/demodetail',name:'demodetail', component:demodetail},

{path:'/story', name:'story',component:story},
{path:'/storydetail',name:'storydetail', component:storydetail},

{path:'/about',name:'about', component:about},

{path:'*', component: notfound}
]