const http = require("http")
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); //cors라는 미들웨어를 설치

const memberList =[
    {no:1, name:"Kim", message:"hello"},
    {no:2, name:"Lee", message:"hello"},
    {no:3, name:"Park", message:"hello"},
    {no:4, name:"Choi", message:"hello"},
    {no:5, name:"Kim", message:"hello"}
]
app.get("/", (req,res)=>{
    console.log("GET 요청..")
    res.send("<h1>hello world!</h1>")
});
app.get("/list", (req,res)=>{
    console.log("GET 요청..")
    res.send(memberList);
});
app.post("/input", (req,res)=>{
    console.log("Post 요청..")
    res.send("");
});

//server 생성 및 실행 
const server = http.createServer(app);
server.listen(5500, ()=>{
    console.log('run on server...');
});
