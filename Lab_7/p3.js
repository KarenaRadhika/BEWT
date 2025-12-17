const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==='/about'){
        fs.readFile('/about.txt',(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        });
    }
    if(req.url==='/content'){
        fs.readFile('/about.txt',(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
})

server.listen(3000, () => {
    console.log('Server running at 3000');
});