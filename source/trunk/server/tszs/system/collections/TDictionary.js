/**=======================================================
 *
 *        文件名称:  Dictionary.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月14日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

module.exports=Dictionary;

function Dictionary()
{
	this.elements = new Array();
}

//获取MAP元素个数
Dictionary.prototype.Count = function()
{
    return this.elements.length;
}

//判断MAP是否为空
Dictionary.prototype.IsEmpty = function()
{
    return (this.elements.length < 1);
}

//删除MAP所有元素
Dictionary.prototype.Clear = function() 
{
    this.elements = new Array();
}

//向MAP中增加元素（key, value) 
Dictionary.prototype.Add = function(key, value)
{
    this.elements.push({
        Key : key,
        Value : value
    });
}

//删除指定KEY的元素，成功返回True，失败返回False
Dictionary.prototype.Remove = function(key)
{
    var bln = false;
    try
    {
        for (i = 0; i < this.elements.length; i++)
        {
            if (this.elements[i].Key == key) 
            {
                this.elements.splice(i, 1);
                return true;
            }
        }
    } 
    catch (e) 
    {
        bln = false;
    }
    return bln;
}

//获取指定KEY的元素值VALUE，失败返回NULL
Dictionary.prototype.Get = function(key) 
{
    try 
    {
        for (i = 0; i < this.elements.length; i++) 
        {
            if (this.elements[i].Key == key)
            {
                return this.elements[i].Value;
            }
        }
    } 
    catch (e) 
    {
        return null;
    }
}

//判断MAP中是否含有指定KEY的元素
Dictionary.prototype.ContainsKey = function(key) 
{
    var bln = false;
    try 
    {
        for (i = 0; i < this.elements.length; i++) 
        {
            if (this.elements[i].Key == key) 
            {
                bln = true;
            }
        }
    } 
    catch (e) 
    {
        bln = false;
    }
    return bln;
}

//判断MAP中是否含有指定VALUE的元素
Dictionary.prototype.ContainsValue = function(value) 
{
    var bln = false;
    try 
    {
        for (i = 0; i < this.elements.length; i++) 
        {
            if (this.elements[i].Value == value) 
            {
                bln = true;
            }
        }
    } 
    catch (e) 
    {
        bln = false;
    }
    return bln;
}

Dictionary.prototype.Values = function() 
{
    var arr = new Array();
    for (i = 0; i < this.elements.length; i++) 
    {
        arr.push(this.elements[i].Value);
    }
    return arr;
}

Dictionary.prototype.Keys = function() 
{
    var arr = new Array();
    for (i = 0; i < this.elements.length; i++) 
    {
        arr.push(this.elements[i].Key);
    }
    return arr;
}
