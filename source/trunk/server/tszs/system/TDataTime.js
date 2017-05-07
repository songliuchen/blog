/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: DataTime
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	  网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

/**
 * 日期时间操作辅助类
 */

/**
 * 获取time 形式字符串
 * @param time
 * @param sp
 * @param istrue
 * @return {*}
 * @constructor
 */
exports.GetTimeString=function(time,sp, istrue)
{
    var b;
    if (time.length == 10)
    {
        time = time + "000";
    }
    var a = parseInt(time);
    if (time == '')
    {
        b = new Date();
    }
    else
    {
        b = new Date(a);
    }
    var year = b.getFullYear();
    var mouth = b.getMonth() + 1;
    mouth= mouth.toString().length>1?mouth:'0'+mouth;

    var day = b.getDate();
    day = day.toString().length>1?day:'0'+day;

    var c = year + sp + mouth + sp + day;
    if (istrue)
    {
        var h = b.getHours();
        h= h.toString().length>1?h:'0'+h;

        var m = b.getMinutes();
        m= m.toString().length>1?m:'0'+m;

        var s = b.getSeconds();
        s= s.toString().length>1?s:'0'+s;

        c = c + " " + h + ":" + m + ":" + s;
        return c;
    }
    else
    {
        return c;
    }
}

/**
 * 格式化日期
 * @param fmt
 * @return {*}
 * @constructor
 */
exports.Format=function(fmt)
{
    var date = new Date();
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}