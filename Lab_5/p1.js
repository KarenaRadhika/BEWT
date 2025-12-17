// 1) Write a Node.js program using child_process.exec() to run the shell command to check the
// current version of node. (A)

const {exec}=require("child_process");
const { stderr, stdout } = require("process");

exec("node --version",(err,stdout,stderr)=>{
    if(err){
        console.log(`Error:${err}`);
    }
    if(stderr){
        console.log(`Error:${stderr}`);
    }
    if(stdout){
        console.log(`output:${stdout}`);
    }
})

exec("python lab-5/1.py",(err,stdout,stderr)=>{
    if(err){
        console.log(`Error:${err}`);
    }
    if(stderr){
        console.log(`Error:${stderr}`);
    }
    else{
        console.log(`output:${stdout}`);
    }
})

