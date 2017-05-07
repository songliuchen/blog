/**======================================================================
//
//        命名空间: Tszs.Business.Weather
//        类  名: Weather
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	     网    址：www.songliuchen.com
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
	NameSpace("Tszs.Business");
	Tszs.Business.Weather =
	{
		/**
		 * 获取url参数
		 * @param {Object} cityname 城市名称
		 * @callback 回调函数
		 */
	    GetTodayWeather:function(cityname,callback)
		{
			var params= new Tszs.System.Collections.Dictionary();
			params.Add('cityname',cityname);
			
			var header= new Tszs.System.Collections.Dictionary();
			header.Add('apikey','577f503efed6726b7496553fca9a5ae2');
			
			var services = 'http://apis.baidu.com/apistore/weatherservice/cityname';
			Tszs.System.Server.WebServices.SendGetAjax(services,params,callback,"json",header);
		}
	}
})();