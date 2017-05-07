/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: Double
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	  网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

/**
 * Double操作辅助类
 */
(function()
{
	NameSpace("Tszs.System");
	Tszs.System.Double =
	{
		/**
		 * 获取数据的Double 值
		 * @param {Object} value
		 * @param {Object} number 保留小数位数
		 */
	    ParseValue:function(value,number)
		{
		  	if(Tszs.System.String.IsNullOrEmpty(value))
				value = 0;
			
			return parseFloat(value).toFixed(Tszs.System.String.IsNullOrEmpty(number)?2:number);
		}
	}
})();