//Server.js File
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("\n\n End");
});
app.listen(3000);