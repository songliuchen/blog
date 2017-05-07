/**
 * Created by Administrator on 2016/10/9.
 */
import login from '../../components/manage/login.vue'
import index from '../../components/manage/technologyclass.vue'
import technologyedit from '../../components/manage/technologyedit.vue'
import technologymanage from '../../components/manage/technologymanage.vue'

import democlass from '../../components/manage/democlass.vue'
import demoedit from '../../components/manage/demoedit.vue'
import demomanage from '../../components/manage/demomanage.vue'

import storyclass from '../../components/manage/storyclass.vue'
import storyedit from '../../components/manage/storyedit.vue'
import storymanage from '../../components/manage/storymanage.vue'

import notfound from '../../components/manage/404.vue'
import tszs from '../../assets/js/common.js'

export default [
{path:'', component: tszs.IsNullOrEmpty(getCookie("token"))?login:index},

{path:'/login', component: login},
{path:'/technologyedit', component: tszs.IsNullOrEmpty(getCookie("token"))?login:technologyedit}, 
{path:'/technologymanage', component: tszs.IsNullOrEmpty(getCookie("token"))?login:technologymanage},
{path:'/technologyclass', component:tszs.IsNullOrEmpty(getCookie("token"))?login: index},

{path:'/democlass', component: tszs.IsNullOrEmpty(getCookie("token"))?login:democlass}, 
{path:'/demoedit', component: tszs.IsNullOrEmpty(getCookie("token"))?login:demoedit},
{path:'/demomanage', component:tszs.IsNullOrEmpty(getCookie("token"))?login: demomanage},

{path:'/storyclass', component: tszs.IsNullOrEmpty(getCookie("token"))?login:storyclass}, 
{path:'/storyedit', component: tszs.IsNullOrEmpty(getCookie("token"))?login:storyedit},
{path:'/storymanage', component:tszs.IsNullOrEmpty(getCookie("token"))?login: storymanage},

{path:'', component: tszs.IsNullOrEmpty(getCookie("token"))?login:index},
{path:'*', component: notfound}
]

function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}