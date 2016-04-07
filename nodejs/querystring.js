var querystring=require("querystring");
console.log(querystring.stringify({name:'value',name1:['name2','value2']}));
console.log(querystring.parse("name=value&name1=name2&name1=value2"));
querystring.parse("name=value,name1=name2,name1=value2",[","],[":"]);
querystring.escape("data");
querystring.unescape("data");