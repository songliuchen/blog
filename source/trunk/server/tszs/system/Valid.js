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
 * 验证操作辅助类
 */
(function()
{
	NameSpace("Tszs.System");
	Tszs.System.Valid =
	{
		/**
		 * 判断是否为手机号
		 * @param {Object} value 参数
		 */
	    IsPhoneNumber:function(value)
		{
		  	var phoneze = /^1[3|4|5|8][0-9]\d{8}$/;
			return phoneze.test(value);
		},

		/**
		 * 判断是否为身份证号
		 * @param {Object} value 参数
		 */
	    IsIDCard:function(value)
		{
		  	var cardze = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			return cardze.test(value);
		},
		
		/**
		 * 验证是否为邮政编码
		 * @param {Object} value 参数
		 */
	    IsYZNumber:function(value)
		{
		  	var yznumberze = /^[1-9][0-9]{5}$/;
		 	return yznumberze.test(value)
		},
		
		/**
		 * 验证是否为邮政编码
		 * @param {Object} value 参数
		 */
	    IsEmail:function(value)
		{
		  	if(Tszs.System.String.IsNullOrEmpty(value))
				return false;
			else if(value.length>25)
				return false;
			else
			{
				 var emailze =  /\w@\w*\.\w/;
				 return emailze.test(value);
			}
		},
		
		/**
		 * 验证是否为数值
		 * @param {Object} value 参数
		 */
	    IsNumber:function(value)
		{
		  	if(getajax.IsNullOrEmpty(value))
				return false;
			else if(value.length>25)
				return false;
			else
			{
				 var numberze = /^[0-9]*$/;
				 return numberze.test(value);
			}
		},
		
		/**
		 * 验证是否为双精度类型
		 * @param {Object} value 参数
		 */
	    IsDouble:function(value)
		{
		  	var r=/^[0-9]+.?[0-9]*$/;
        	return r.test(value);
		},
		
		/**
		 * 验证密码是否符合要求
		 * @param {Object} value 参数
		 */
	    CanPassword:function(value)
		{
		  	var passwordze=/^(?![^a-zA-Z]+$)(?!\D+$).{8,20}$/;
			return passwordze.test(value);
		},

		/*判断两个字符串是否相等，value1 对象1的值，value2 对象2的值，如果相等返回true,否则返回false*/
		Equal:function(value1,value2)
		{
			return Tszs.System.Base.Equal(value1,value2)
		},

        /*字符串替换，value 对象的值，replacechar 原值，bereplacechar 被替换后值*/
        Replace:function(value,replacechar,bereplacechar)
        {
            if(Tszs.System.String.IsNullOrEmpty(value)||
                 Tszs.System.String.IsNullOrEmpty(replacechar))
                return;

            value= value.replace(replacechar,bereplacechar);
            return value;
        },
        
        /**
         * 判断值是否以指定的对象结尾
         */
        EndWidth:function(value,endvalue)
        {
        	if(this.IsNullOrEmpty(value) || this.IsNullOrEmpty(endvalue))
        		return false;
        	var d=value.length-endvalue.length;
        	return d>=0&&endvalue.lastIndexOf(endStr)==d;
        },
        
        /**
         * 大小写转换（转大写）
         */
        ToUpper:function(value)
        {
        	if(this.IsNullOrEmpty(value))
        		return "";
        	
        	return value.toUpperCase();
        },
        
        /**
         * 大小写转换（转小写）
         */
        ToLower:function(value)
        {
        	if(this.IsNullOrEmpty(value))
        		return "";
        	
        	return value.tolocaleLowerCase();
        }
	}
})();