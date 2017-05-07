# 客户端配置
 - 执行以下命令，安装依赖项
  ```sh
  $ cd source/trunk/client
  $ npm install
  ```
对element-ui 控件做了局部修改，满足博客原型设计需求
 - 拷贝config 文件夹下 fonts文件夹和index.css文件到 node_modules\element-ui\lib\theme-default下并替换
 -  拷贝config 文件夹下element-ui.common.js文件到 node_modules\element-ui\lib\下并替换

# 服务端配置
 - 安装mysql 数据库
 - 创建数据库blog
 - 导入config文件夹下blog.sql 文件
 - 修改server/database/dbhelper.js 文件中数据库连接配置
 
# 前后端互联配置
 - 修改本机host文件配置，添加127.0.0.1 api.song.com 对应关系配置
  
<font color="red">`（貌似express 无法通过localhost或者127.0.0.1进行代理转发，只能通过配置另外的域名进行代理）`
`（至于为什么配置这一步，在于设计采用前后端分离方式，考虑部署会分开进行，未避免出现跨域问题，前端接口访问都是以相对路径实现，如果前后台分开部署，需要代理进行转发后缀为.do 的请求）`
`（实际开发，前后台也是分成两个工程独立进行的）`</font>

实际效果展示地址：[宋爷的网站(www.songliuchen.com)](http://www.songliuchen.com)