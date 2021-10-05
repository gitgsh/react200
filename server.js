const http = require("http")
const express = require("express");
const app=express();

app.get("/", (req,res)=>{
    console.log("GET 요청..")
    res.end("<h1>hello world!</h1>")
});

//server 생성 및 실행 
const server = http.createServer(app);
server.listen(5500, ()=>{
    console.log('run on server...')

});
