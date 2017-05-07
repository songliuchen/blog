exports.getUrlParam=function (name)
{
	//构造一个含有目标参数的正则表达式对象
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	
	//匹配目标参数
	var r = window.location.search.substr(1).match(reg);
	if(this.IsNullOrEmpty(r))
	{
		r=window.location.hash.substr(window.location.hash.indexOf('?')+1).match(reg);
	}
	//返回参数值
	if (r != null)
		return unescape(r[2]);
	return undefined; 
}

/**
 * 判断参数是否为空,value ，为空返回true,不为空返回false
 * @param {Object} value 是否为空字段名
 * @return 是否为空，空则返回true，否则返回false
 */
exports.IsNullOrEmpty=function(value)
{
  	if(value == null || value == "undefined" || value.length == 0)
		return true;
	else
		return false;
}

/**
 * 分割字符串,value 要分割的值，splitchar分割字符串，返回分割数组
 * @param {String} value 被分隔独享
 * @param {String} splitchar 分割符
*/
exports.Split=function(value,splitchar)
{
	if(this.IsNullOrEmpty(value))
        return null;

    if(this.IsNullOrEmpty(splitchar))
        return null;

    return value.split(splitchar);
}

/**
 * 判断字符串是否包含指定的字符
 * @param {String} value 被分隔独享
 * @param {String} containchar 包含字符
 */
exports.Contain=function(value,containchar)
{
    if(this.IsNullOrEmpty(value))
        return false;

    return value.indexOf(containchar)>0;
}

/**
 *判断两个字符串是否相等，value1 对象1的值，value2 对象2的值，如果相等返回true,否则返回false
 * */
exports.Equal=function(value1,value2)
{
	var value1null = this.IsNullOrEmpty(value1);
    var value2null = this.IsNullOrEmpty(value2);

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
}

/**
 * 字符串替换，value 对象的值，replacechar 原值，bereplacechar 被替换后值
 */
exports.Replace=function(value,replacechar,bereplacechar)
{
    if(this.IsNullOrEmpty(value)|| this.IsNullOrEmpty(replacechar))
        return;

    value= value.replace(replacechar,bereplacechar);
    return value;
},
        
/**
 * 判断值是否以指定的对象结尾
 */
exports.EndWidth=function(value,endvalue)
{
	if(this.IsNullOrEmpty(value) || this.IsNullOrEmpty(endvalue))
		return false;

	var d=value.length-endvalue.length;
	return d>=0 && endvalue.lastIndexOf(endStr)==d;
},

/**
 * @param {String} value 指定字符串
 * @param {String} startvalue 指定开头字段
 * 判断值是否以指定的对象结尾
 */
exports.StartWidth=function(value,startvalue)
{
    if(this.IsNullOrEmpty(value) || this.IsNullOrEmpty(startvalue))
        return false;

    var fdstart = value.indexOf(startvalue);
    return fdstart==0;
}
        
/**
 * 大小写转换（转大写）
 */
exports.ToUpper=function(value)
{
	if(this.IsNullOrEmpty(value))
		return "";
	
	return value.toUpperCase();
},
        
/**
 * 大小写转换（转小写）
 */
exports.ToLower=function(value)
{
    if(this.IsNullOrEmpty(value))
        return "";

    return value.tolocaleLowerCase();
}


/**
 * 大小写转换（转小写）
 */
exports.Substring=function(value,startindex,endindex)
{
    if(this.IsNullOrEmpty(value))
        return "";

    return value.substring(startindex,endindex);
},


/**
 * 获取GUID
 */
exports.GetGUID=function()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

/**
 * 获取cookie对象
 */
exports.getCookie=function(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}

exports.delCookie=function(name)
{
	document.cookie= name + "="+undefined;
}


exports.ToUpper=function(name)
{
	return name.toUpperCase();
}

exports.ToLower=function(name)
{
	return name.toLowerCase();
}

exports.DateFormat = function(date,fmt)   
{
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  

/**
 * 获取api根路径
 */
exports.GetApiRootPath=function()
{
	return '';
}

/**
 * 判断是否为json对象
 */
exports.IsJsonObject=function(data)
{
	return typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length
}