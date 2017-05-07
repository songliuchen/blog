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
	NameSpace("Tszs.System");
	Tszs.System.Cache =
	{
		/**
		 * 设置session
		 * @param {Object} keys
		 * @param {Object} value
		 */
	    SetSessionStorage:function(keys, value)
		{
			if (sessionStorage)
			{
				var jsom = sessionStorage['jsom'];
				var mp = {};
				if (jsom && jsom != '')
				{
					mp = JSON.parse(jsom);
				}
				mp[keys] = value;
				jsom = JSON.stringify(mp);
				sessionStorage['jsom'] = jsom;
			}
			else
			{
				/*不支持sessionStorage*/
			}
		},
		
		
		/**
		 * 删除session
		 * @param {Object} keys
		 */
		RemoveSessionStorage:function(keys)
		{
			if (sessionStorage && sessionStorage['jsom'] != undefined)
			{
				var jsom = sessionStorage['jsom'];
				if (jsom && jsom != '')
				{
					var a = {};
					var mp = JSON.parse(jsom);
					for (var i in mp)
					{
						if (i != keys)
						{
							a[i] = mp[i];
						}
					}
					//mp[keys] = '';
					jsom = JSON.stringify(a);
					sessionStorage['jsom'] = jsom;
				}
			}
		},
		
		/**
		 * 获取session
		 * @param {Object} keys
		 */
		GetSessionStorage:function(keys)
		{
			if (sessionStorage && sessionStorage['jsom'] != undefined)
			{
				var jsom = sessionStorage['jsom'];
				if (jsom && jsom != '')
				{
					var mp = JSON.parse(jsom);
					if (mp[keys] && mp[keys] != '')
					{
						return mp[keys];
					}
					else
					{
						return "";
					}
				}
			}
			else
			{
				return "";
			}
		},
		
		/**
		 * 设置本地数据
		 * @param {Object} keys
		 * @param {Object} value
		 */
		SetLocalStorage:function(keys, value)
		{
			if (localStorage)
			{
				var jsom = localStorage['jsom'];
				var mp = {};
				if (jsom && jsom != '')
				{
					mp = JSON.parse(jsom);
				}
				mp[keys] = value;
				jsom = JSON.stringify(mp);
				localStorage['jsom'] = jsom;
			} else
			{
					/*不支持sessionStorage*/
			}
		},
		
		/**
		 * 删除本地数据
		 * @param {Object} keys
		 */
		RemoveLocalStorage:function(keys)
		{
			if (localStorage && localStorage['jsom'] != undefined)
			{
				var jsom = localStorage['jsom'];
				if (jsom && jsom != '')
				{
					var a = {};
					var mp = JSON.parse(jsom);
					for (var i in mp)
					{
						if (i != keys)
						{
							a[i] = mp[i];
						}
					}
					jsom = JSON.stringify(a);
					localStorage['jsom'] = jsom;
				}
			}
		},
		
		/**
		 * 获取本地数据
		 * @param {Object} keys
		 */
		GetLocalStorage:function(keys)
		{
			if (localStorage && localStorage['jsom'] != undefined)
			{
				var jsom = localStorage['jsom'];
				if (jsom && jsom != '')
				{
					var mp = JSON.parse(jsom);
					if (mp[keys] && mp[keys] != '')
					{
						return mp[keys];
					}
					else
					{
						return "";
					}
				}
			}
			else
			{
				return "";
			}
		}
	}
})();