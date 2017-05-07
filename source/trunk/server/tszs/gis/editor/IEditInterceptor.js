//======================================================================
//
//        命名空间: Tszs.System.GIS
//        类  名: IEditInterceptor
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人: 
//        修改时间: 
//
//======================================================================

/*编辑拦截接口*/
NameSpace("Tszs.GIS.Editor");
Tszs.GIS.Editor.IEditInterceptor = function(params)
{
//    设置编辑拦截的名称
    var Name = "";

//    设置编辑拦截的索引
    var Index = 0;

    var TableNames=[];
};

Tszs.GIS.Editor.IEditInterceptor.prototype =
{
    /*添加图层*/
    BeforeEditOption:function(featureclass,features)
    {

    },

    /*添加图层,并绑定绘制临时图层*/
    AfterEditOption:function(layer,graphlayer)
    {

    }
};