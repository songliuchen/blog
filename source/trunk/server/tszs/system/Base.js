/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: Base
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	  网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

(function()
{
	NameSpace("Tszs.System");
	Tszs.System.Base = 
	{
		/*判断参数是否为空,value ，为空返回true,不为空返回false*/
		IsNullOrEmpty:function(value)
		{
		  	if(value == null || value == "undefined" || value.length == 0)
				return true;
			else
				return false;
		},

		/*判断两个字符串是否相等，value1 对象1的值，value2 对象2的值，如果相等返回true,否则返回false*/
		Equal:function(value1,value2)
		{
			var value1null = Tszs.System.Base.IsNullOrEmpty(value1);
		    var value2null = Tszs.System.Base.IsNullOrEmpty(value2);

		    if(value1null && value2null)
		    	return true;

		    if(value1null != value2null)
		    	return false;

		    if(!value1null  && !value2null)
		    {
		    	return value1 == value2;
		    }
		    else
		    	return false;
		},

        /**
         * JavaScript 实现类继承
         */
        Extend:function (subClass,superClass)
        {
        	if(this.IsNullOrEmpty(subClass) || this.IsNullOrEmpty(superClass))
        		return;
        	
            var F = function() {};
            F.prototype = superClass.prototype;
            subClass.prototype = new F();
            subClass.prototype.constructor = subClass;

            //增加一个superClass属性
            subClass.superClass = superClass.prototype;
            if(superClass.prototype.constructor == Object.prototype.constructor) {
                superClass.prototype.constructor = superClass;//构造函数名
            }
        },
        
        /**
         * 获取站点根路径地址
         */
        GetRootPath:function()
        {
        	//获取当前网页服务地址
        	var strFullPath=window.document.location.href;
        	
        	//获取文件相对路径
        	var strPath=window.document.location.pathname;
        	
        	//获取部署站点信息
        	var pos=strFullPath.indexOf(strPath);
        	var prePath=strFullPath.substring(0,pos);
        	var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
        	
        	//返回最终网站部署地址
        	return prePath+postPath;
        },
        
        /**
         * 获取站点根路径地址
         */
        GetInfo:function(string,replace)
        {
        	return Tszs.System.String.Replace(string,"{param}",replace);
        }
	}
})();