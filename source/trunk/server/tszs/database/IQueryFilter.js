/**=======================================================
 *
 *        文件名称:  IQueryFilter.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月12日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

NameSpace("Tszs.DataBase");
Tszs.DataBase.IQueryFilter = function(params)
{
};
/**
 * 查询属性条件SQL 语句中Where后内容
 */
Tszs.DataBase.IQueryFilter.prototype.WhereString ="";

/**
 * 查询结果返回字段，默认为所有,通过逗号分隔
 */
Tszs.DataBase.IQueryFilter.prototype.OutFields= "";

