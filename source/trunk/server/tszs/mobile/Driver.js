/**======================================================================
//
//        命名空间: Tszs.Mobile
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
	NameSpace("Tszs.Mobile");
	Tszs.Mobile.Driver =
	{
		/*判断是否为微信*/
	    IsWeixin:function()
		{
		  	var ua = navigator.userAgent.toLowerCase();
		    if(ua.match(/MicroMessenger/i)=="micromessenger")
		    {
		        return true;
		    }
		    else
		    {
		        return false;
		    }
		}
	}
})();