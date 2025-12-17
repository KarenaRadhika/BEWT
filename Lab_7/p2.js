const http=require('http');
const fs=require('fs');
const { log } = require('console');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('content-type','type/html');
        res.statusCode=200;
        res.end(`<h1>home page..</h1>`);
    }
    else if(req.url==='/about'){
        res.statusCode=200;
        res.end("about page...");
    }
    else if(req.url==='/content'){
        res.statusCode=200;
        res.end("content page..");
    }else{
        res.statusCode=404;
        res.end("page not found..");
    }
})

server.listen(3000,()=>{
    console.log("server running at port 3000..");
    
})