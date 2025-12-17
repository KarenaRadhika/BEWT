const cp=require("child_process");
const { log } = require("console");

const child =cp.spawn("cmd.exe",["/c","dir","/s","c:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`STDERR:${data}`);
})

child.stdout.on('data',(data)=>{
    console.log(`STDOUT:${data}`);
})

child.on('close',(data)=>{
    console.log(`close:${data}`);
})