//Server.js File
const express=require('express');
const path=require('path');
const app=express();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const jsondata=require("./data/data.json");
const env=require("./environment.json")
var MongoClient=mongodb.MongoClient;
//Route for root
app.get('/',function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello NodeJS from Sagar");
    res.end("\n\n End");
});

// Routing for getting JSON Data
app.use(express.static(path.join(__dirname, 'public')));
app.get('/json',(req,res)=>{
    debugger;
    const database = {connectionURL:"mongodb+srv://admin:"+env.mongoPassword+"@cluster0-a9wm1.mongodb.net/test?retryWrites=true&w=majority"}
    const client = new MongoClient(database.connectionURL, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("sample_training").collection("companies");
        var cursor=collection.find();
        cursor.forEach(function(err,doc){
            console.log(doc);
        });
        
      })
    
    

    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(jsondata));
    res.end(`<br/>`);
});
app.listen(3000,()=>{
    console.log('Server listening at Port : 3000');
});
