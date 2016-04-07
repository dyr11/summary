#从cmd退出nodejs
process.exit();
.exit;
按两次 ctrl +c;

#install express
npm install -g express
express -V
npm install -g express-generator

#中文乱码
1. file save as UTF-8;
2.res.write('<head><meta charset="utf-8"/></head>');

#[].forEach(function(data,index){});

#url
url.parse("url",[true|false],[true|false]);
url.format({});
url.resolve("host","path");

#querystring
querystring模块暴露的方法：
stringify//序列化；
parse//反序列化；
escape//转义；
unescape//反转义

#chrome查看dns缓存
chrome://net-internals/#dns

#http方法
get,post,put,delete,head,trace,options

#github在项目主页点击T可以激活搜索。

#cheerio
npm install [-g] cheerio
