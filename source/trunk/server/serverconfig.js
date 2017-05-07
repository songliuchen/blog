/**======================================================================
 //
 //        命名空间: Tszs.Web
 //        类  名: Url
 //        创 建 人: 宋 刘 陈
 //		  Q      Q: 756519755
 //	 	  网    址：www.songliuchen.com
 //        创建时间: 2014/8/31 11:23:35
 //        修 改 人:
 //        修改时间:
 //
 ======================================================================*/
var tstring= require("./tszs/system/TString.js");
var TDictionary= require("./tszs/system/collections/TDictionary.js");
var tdictionary = new TDictionary();
var tbufferdictionary = new TDictionary();

//前台服务接口
//业务接口
var indexjs = require('./business/front/index/index.js');
//首页文章列表
var technology = require('./business/front/technology/technology.js');
//文章分类
var technologyclass = require('./business/front/technology/technologyclass.js');
//文章详情
var technologydetail = require('./business/front/technology/technologydetail.js');
//文章阅读列表
var technologyreadlist = require('./business/front/technology/technologyreadlist.js');
//文章推荐列表
var technologyrecommendlist = require('./business/front/technology/technologyrecommendlist.js');
//文章更新列表
var technologynewlist = require('./business/front/technology/technologynewlist.js');
//文章月份列表
var technologymounthlist = require('./business/front/technology/technologymounthlist.js');
//文章上一篇、下一篇
var technologydetailpreandnext = require('./business/front/technology/technologydetailpreandnext.js');
//标签云
var technologymarklist = require('./business/front/technology/technologymarklist.js');
//友情链接
var linklist = require('./business/front/base/linklist.js');
//个人信息
var authorinfo = require('./business/front/base/authorinfo.js');
//搜索文章数据
var searchtechnology = require('./business/front/search/searchtechnology.js');
//文章数量
var technologysize = require('./business/front/technology/technologysise.js');

//小试牛刀前端接口
var demo = require('./business/front/demo/demo.js');
//文章数量
var demosize = require('./business/front/demo/demosise.js');
//文章阅读列表
var demoreadlist = require('./business/front/demo/demoreadlist.js');
//文章推荐列表
var demorecommendlist = require('./business/front/demo/demorecommendlist.js');
//文章详情
var demodetail = require('./business/front/demo/demodetail.js');
//文章上一篇、下一篇
var demodetailpreandnext = require('./business/front/demo/demodetailpreandnext.js');
//文章更新列表
var demonewlist = require('./business/front/demo/demonewlist.js');

//爷和姐的故事前端接口
//首页文章列表
var story = require('./business/front/story/story.js');
//文章数量
var storysize = require('./business/front/story/storysise.js');
//文章阅读列表
var storyreadlist = require('./business/front/story/storyreadlist.js');
//文章推荐列表
var storyrecommendlist = require('./business/front/story/storyrecommendlist.js');
//文章详情
var storydetail = require('./business/front/story/storydetail.js');
//文章上一篇、下一篇
var storydetailpreandnext = require('./business/front/story/storydetailpreandnext.js');
//文章更新列表
var storynewlist = require('./business/front/story/storynewlist.js');

//后台管理服务接口
//登陆
var login = require('./business/manage/login/login.js');
//获取服务端时间
var queryservertime = require('./business/manage/base/queryservertime.js');
//后台文件管理
var filemanager = require('./business/manage/file/filemanager.js');
//图片上传管理
var uploadjson = require('./business/manage/file/uploadjson.js');

//技术文章
//后台分类管理
var managetechnologyclass = require('./business/manage/technology/technologyclass.js');
//后台修改分类
var updatetechnologyclass = require('./business/manage/technology/updatetechnologyclass.js');
//后台修改分类索引
var updatetechnologyclassorder = require('./business/manage/technology/updatetechnologyclassorder.js');
//删除分类
var deletetechnologyclass = require('./business/manage/technology/deletetechnologyclass.js');
//新增分类
var addtechnologyclass = require('./business/manage/technology/addtechnologyclass.js');
//添加文章
var addtechnology = require('./business/manage/technology/addtechnology.js');
//查询文章详情
var querytechnologydetail = require('./business/manage/technology/querytechnologydetail.js');
//编辑文章
var updatetechnologydetail = require('./business/manage/technology/updatetechnologydetail.js');
//获取日志列表
var querytechnologylist = require('./business/manage/technology/querytechnologylist.js');
//删除文章数据
var deletetechnology = require('./business/manage/technology/deletetechnology.js');


//小试牛刀
//后台分类管理
var managedemoclass = require('./business/manage/demo/democlass.js');
//后台修改分类
var updatedemoclass = require('./business/manage/demo/updatedemoclass.js');
//后台修改分类索引
var updatedemoclassorder = require('./business/manage/demo/updatedemoclassorder.js');
//删除分类
var deletedemoclass = require('./business/manage/demo/deletedemoclass.js');
//新增分类
var adddemoclass = require('./business/manage/demo/adddemoclass.js');
//添加文章
var adddemo = require('./business/manage/demo/adddemo.js');
//查询文章详情
var querydemodetail = require('./business/manage/demo/querydemodetail.js');
//编辑文章
var updatedemodetail = require('./business/manage/demo/updatedemodetail.js');
//获取日志列表
var querydemolist = require('./business/manage/demo/querydemolist.js');
//删除文章数据
var deletedemo = require('./business/manage/demo/deletedemo.js');


//故事文章
//后台分类管理
var managestoryclass = require('./business/manage/story/storyclass.js');
//后台修改分类
var updatestoryclass = require('./business/manage/story/updatestoryclass.js');
//后台修改分类索引
var updatestoryclassorder = require('./business/manage/story/updatestoryclassorder.js');
//删除分类
var deletestoryclass = require('./business/manage/story/deletestoryclass.js');
//新增分类
var addstoryclass = require('./business/manage/story/addstoryclass.js');
//添加文章
var addstory = require('./business/manage/story/addstory.js');
//查询文章详情
var querystorydetail = require('./business/manage/story/querystorydetail.js');
//编辑文章
var updatestorydetail = require('./business/manage/story/updatestorydetail.js');
//获取日志列表
var querystorylist = require('./business/manage/story/querystorylist.js');
//删除文章数据
var deletestory = require('./business/manage/story/deletestory.js');

function getServerlist()
{
    if(tdictionary.Count()==0)
    {
        tdictionary.Add('index_index.do', indexjs);
        tdictionary.Add('technology_technology.do', technology);
        tdictionary.Add('technology_technologyclass.do', technologyclass);
        tdictionary.Add('technology_technologydetail.do', technologydetail);
        tdictionary.Add('technology_technologyreadlist.do', technologyreadlist);
        tdictionary.Add('technology_technologyrecommendlist.do', technologyrecommendlist);
        tdictionary.Add('technology_technologynewlist.do', technologynewlist);
        tdictionary.Add('technology_technologymounthlist.do', technologymounthlist);
        tdictionary.Add('technology_technologymarklist.do', technologymarklist);
        tdictionary.Add('technology_technologydetailpreandnext.do', technologydetailpreandnext);
        tdictionary.Add('base_linklist.do', linklist);
        tdictionary.Add('base_authorinfo.do', authorinfo);
        tdictionary.Add('technology_technologysize.do', technologysize);

        //小试牛刀
        tdictionary.Add('demo_demo.do', demo);
        tdictionary.Add('demo_demosize.do', demosize);
        tdictionary.Add('demo_demoreadlist.do', demoreadlist);
        tdictionary.Add('demo_demorecommendlist.do', demorecommendlist);
        tdictionary.Add('demo_demodetail.do', demodetail);
        tdictionary.Add('demo_demodetailpreandnext.do', demodetailpreandnext);
        tdictionary.Add('demo_demonewlist.do', demonewlist);

        //爷和姐的故事
        tdictionary.Add('story_story.do', story);
        tdictionary.Add('story_storysize.do', storysize);
        tdictionary.Add('story_storyreadlist.do', storyreadlist);
        tdictionary.Add('story_storyrecommendlist.do', storyrecommendlist);
        tdictionary.Add('story_storydetail.do', storydetail);
        tdictionary.Add('story_storydetailpreandnext.do', storydetailpreandnext);
        tdictionary.Add('story_storynewlist.do', storynewlist);

        //后台管理服务接口
        tdictionary.Add('manage_login_login.do', login);
        tdictionary.Add('manage_base_queryservertime.do', queryservertime);

        //技术文章编辑
        tdictionary.Add('manage_technology_technologyclass.do', managetechnologyclass);
        tdictionary.Add('manage_technology_updatetechnologyclass.do', updatetechnologyclass);
        tdictionary.Add('manage_technology_updatetechnologyclassorder.do', updatetechnologyclassorder);
        tdictionary.Add('manage_technology_deletetechnologyclass.do', deletetechnologyclass);
        tdictionary.Add('manage_technology_addtechnologyclass.do', addtechnologyclass);
        tdictionary.Add('manage_technology_addtechnology.do', addtechnology);
        tdictionary.Add('manage_technology_querytechnologydetail.do', querytechnologydetail);
        tdictionary.Add('manage_technology_updatetechnologydetail.do', updatetechnologydetail);
        tdictionary.Add('manage_technology_querytechnologylist.do', querytechnologylist);
        tdictionary.Add('manage_technology_deletetechnology.do', deletetechnology);

        //小试牛刀文章编辑
        tdictionary.Add('manage_demo_democlass.do', managedemoclass);
        tdictionary.Add('manage_demo_updatedemoclass.do', updatedemoclass);
        tdictionary.Add('manage_demo_updatedemoclassorder.do', updatedemoclassorder);
        tdictionary.Add('manage_demo_deletedemoclass.do', deletedemoclass);
        tdictionary.Add('manage_demo_adddemoclass.do', adddemoclass);
        tdictionary.Add('manage_demo_adddemo.do', adddemo);
        tdictionary.Add('manage_demo_querydemodetail.do', querydemodetail);
        tdictionary.Add('manage_demo_updatedemodetail.do', updatedemodetail);
        tdictionary.Add('manage_demo_querydemolist.do', querydemolist);
        tdictionary.Add('manage_demo_deletedemo.do', deletestory);

        //故事文章编辑
        tdictionary.Add('manage_story_storyclass.do', managestoryclass);
        tdictionary.Add('manage_story_updatestoryclass.do', updatestoryclass);
        tdictionary.Add('manage_story_updatestoryclassorder.do', updatestoryclassorder);
        tdictionary.Add('manage_story_deletestoryclass.do', deletestoryclass);
        tdictionary.Add('manage_story_addstoryclass.do', addstoryclass);
        tdictionary.Add('manage_story_addstory.do', addstory);
        tdictionary.Add('manage_story_querystorydetail.do', querystorydetail);
        tdictionary.Add('manage_story_updatestorydetail.do', updatestorydetail);
        tdictionary.Add('manage_story_querystorylist.do', querystorylist);
        tdictionary.Add('manage_story_deletestory.do', deletestory);
    }
    return tdictionary;
}

function getBufferServerlist()
{
    if(tbufferdictionary.Count()==0)
    {
        tbufferdictionary.Add('manage_file_filemanager.do', filemanager);
        tbufferdictionary.Add('manage_file_uploadjson.do', uploadjson);
    }
    return tbufferdictionary;
}

exports.GetServerIndex=function(url)
{
    if(tstring.IsNullOrEmpty(url))
        return "";
    url = tstring.Split(url,"?")[0];
    url= tstring.Replace(url,/\//g,"_");
    url= tstring.Replace(url,/\\/g,"_");
    if(tstring.StartWidth(url,"_"))
    {
        url=tstring.Substring(url,1,url.length);
    }

    var map = getServerlist();
    if(map.ContainsKey(url))
    {
        return map.Get(url);
    }
    return "";
}

exports.GetBufferServerIndex=function(url)
{
    if(tstring.IsNullOrEmpty(url))
        return "";
    url = tstring.Split(url,"?")[0];
    url= tstring.Replace(url,/\//g,"_");
    url= tstring.Replace(url,/\\/g,"_");
    if(tstring.StartWidth(url,"_"))
    {
        url=tstring.Substring(url,1,url.length);
    }

    var map = getBufferServerlist();
    if(map.ContainsKey(url))
    {
        return map.Get(url);
    }
    return "";
}

exports.GetPageSize=function()
{
    return 10;
}

exports.GetTotalPageSize=function(totalcount)
{
    return  parseInt(totalcount/10);
}


