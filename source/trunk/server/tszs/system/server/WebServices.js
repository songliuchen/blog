/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: String
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	  网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

/**
 * 字符操作辅助类
 */
(function()
{
	NameSpace("Tszs.System.Server");
	Tszs.System.Server.WebServices =
	{
		/**
		 * 发送WebServices 服务请求
		 * @param {Object} url
		 * @param {Object} params
		 * @param {Object} callback
		 * @param {Object} sysn
		 */
	    SendWebServices:function(url,params,callback,sysn)
		{
			var pl = new SOAPClientParameters();
			var keys = params.Keys();
			for(var i=0;i<keys.length;i++)
			{
				pl.add(keys[i], params.Get(keys[i]));
			}
			SOAPClient.invoke(url.substring(0,url.lastIndexOf('/')), url.substring(url.lastIndexOf('/')+1,url.length), pl, sysn, callback);
		},
		
		/**
		 * 发送Ajax 服务请求(Get)
		 * @param {Object} url
		 * @param {Object} params 参数
		 * @param {Object} callback 回调函数
		 * @param {Object} datatype 异步类型
		 * @param {Object} header 头文件
		 */
		SendGetAjax:function(url,params,callback,datatype,header)
		{
			//TODO:后期需要换成统一配置
			if(Tszs.System.String.IsNullOrEmpty(datatype))
				datatype="jsonp";
			
			var pl="";
			var keys = params.Keys();
			for(var i=0;i<keys.length;i++)
			{
				pl+=keys[i]+"="+params.Get(keys[i])+"&";
			}
			pl = pl.substring(0,pl.length-1);
			var options = {
				url: url,
				type: 'GET',
				dataType:datatype, 
				timeout : 32000,
				jsonp: "tszscallback",
				data: pl,
				success: function(result)
				{
					callback(result);
				},
				beforeSend:function(request)
				{
					if(!Tszs.System.String.IsNullOrEmpty(header))
					{
						var keys = header.Keys();
						for(var i=0;i<keys.length;i++)
						{
							request.setRequestHeader(keys[i], header.Get(keys[i]));
						}
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown)
				{
					callback(errorThrown);
				}
			};
			$.ajax(options);
		},
		
		/**
		 * 发送Ajax 服务请求(Post)
		 * @param {Object} url
		 * @param {Object} params 参数
		 * @param {Object} callback 回调函数
		 * @param {Object} datatype 异步类型
		 */
		SendPostAjax:function(url,datatype,params,callback)
		{
			//TODO:后期需要换成统一配置
			if(Tszs.System.String.IsNullOrEmpty(datatype))
				datatype="jsonp";
			var pl="{";
			var keys = params.Keys();
			for(var i=0;i<keys.length;i++)
			{
				pl+=keys[i]+":"+params.Get(keys[i])+",";
			}
			pl = pl.substring(0,pl.length-1)+"}";
			var options = {
				url: servers,
				type: 'get',
				contentType: "text/xml; charset=UTF-8",
				dataType:datatype, 
				jsonp: "tszscallback",
				timeout : 12000,
				data: pl,
				success: function(result)
				{
					callback(result);
				},
				error: function(XMLHttpRequest, textStatus, errorThrown)
				{
					callback(errorThrown);
				}
			};
			$.ajax(options);
		}
	}
})();