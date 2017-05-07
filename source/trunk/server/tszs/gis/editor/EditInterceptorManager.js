//======================================================================
//
//        命名空间: Tszs.System.GIS
//        类  名: EditInterceptorManager
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人: 
//        修改时间: 
//
//======================================================================

/*编辑拦截容器，提供注册拦截及移除拦截方法*/
(function(undefined)
{
    NameSpace("Tszs.GIS.Editor");
    Tszs.GIS.Editor.EditInterceptorManager =
    {
        EditInterceptors:[],

        /*注册编辑拦截*/
        Add:function(editinterceptor)
        {
            if(editinterceptor == null)
                return;

            Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors.push(editinterceptor);
        },

        /*移除编辑拦截*/
        Remove:function(editinterceptor)
        {
            if(Tszs.System.GIS.EditInterceptorManager.EditInterceptors.contains(editinterceptor))
                Tszs.System.GIS.EditInterceptorManager.EditInterceptors.remove(editinterceptor);
        },

        /*清空编辑拦截容器*/
        Clear:function()
        {
            Tszs.System.GIS.EditInterceptorManager.EditInterceptors.clear();
        },

        /*编辑前拦截*/
        BeforeEditOption:function(layer)
        {
            debugger;
            if(Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors == null ||
            		Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors.length == 0)
                return;

            for(var i = 0;i<Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors.length;i++)
            {
            	Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors[i].BeforeEditOption(layer);
            }
        },

        /*编辑后拦截*/
        AfterEditOption:function(layer)
        {
            debugger;
            if(Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors == null ||
            		Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors.length == 0)
                return;

            for(var i = 0;i<Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors.length;i++)
            {
            	Tszs.GIS.Editor.EditInterceptorManager.EditInterceptors[i].AfterEditOption(layer);
            }
        }
    }
})();