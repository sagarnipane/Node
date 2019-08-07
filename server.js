//Server.js File
var express=require('express');
var app=express();
var jsondata=require("./data/data.json");
var env=require("./environment.json")
//Route for root
app.get('/',function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello NodeJS from Sagar");
    res.end("\n\n End");
});

// Routing for getting JSON Data
app.get('/json',(req,res)=>{
    connectionString="mongodb+srv://admin:"+env.mongoPassword+"@cluster0-a9wm1.mongodb.net/test?retryWrites=true&w=majority"
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(jsondata));
    res.end(`<br/>${connectionString}`);
});
app.listen(3000,()=>{
    console.log('Server listening at Port : 3000');
});
