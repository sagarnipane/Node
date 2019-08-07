//Server.js File
var express=require('express');
var app=express();
var jsondata=require("./data/data.json");
//Route for root
app.get('/',function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello NodeJS from Sagar");
    res.end("\n\n End");
});

// Routing for getting JSON Data
app.get('/json',(req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(jsondata));
    res.end("<br/>End of JSON Data");
});
app.listen(3000,()=>{
    console.log('Server listening at Port : 3000');
});
