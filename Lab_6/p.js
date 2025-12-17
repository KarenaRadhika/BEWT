// 1) Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously
// and print its content on the console. (A)
// const { log } = require('console');
// const fs=require('fs');
// console.log("Start");
// fs.readFile('lab_6/data.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })


// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the
// asynchronous version. (A)
// const fs=require('fs');

// console.log("Start");
// try{
//     const data=fs.readFileSync('Lab_6/data.txt','utf-8');
//     console.log(data);
// }
// catch(err){
//     console.log(err);
// }
// console.log("end");


// 3) Create a program that writes the text into a file named output.txt. (A)
// const fs=require('fs');
// const { data } = require('react-router-dom');

// console.log("start");

// fs.writeFile('output.txt','Hello! from nvsjkgv..',(err)=>{
//     if(err){
//         console.log("error file",err);
//     }else{
//         console.log('file written successfully');
        
//     }
// })
// console.log("end");

// 4) Create a program that appends the text into a file named output.txt. (A)
// const fs=require('fs');
// console.log("start");

// fs.appendFile('Lab_6/output.txt','Hello from sbvj',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log("Successfully");
//     }
// })
// console.log("end");

// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or
// error. (B)
// const fs=require('fs');

// fs.unlink('Lab_6/temp.txt',(err)=>{
//     if(err){
//         console.log("Error",err);
        
//     }
//     console.log("Unlink successfully");
    
// })

// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already
// exists, show an appropriate message. (B)
// const fs=require('fs');

// fs.mkdir('my-data',(err)=>{
//     if(err){
//         if(err.code==='EEISTS'){
//             console.log("file already exists..");
//         }else{
//             console.log("error creat folder");
//         }
//     }
//     console.log("file created successfully..");
// })

// 7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the
// file names one by one. (B)
// const fs=require('fs');
// fs.readdir('Lab_6',(err,data)=>{
//     if(err){
//         console.log("ERROR");
        
//     }
//     console.log(data);
    
// })
// 8) Write a program that copies a file named source.txt to a new file named backup.txt using
// fs.copyFile(). (C)
// const { log } = require('console');
// const fs=require('fs');
// fs.copyFile('Lab_6/data.txt','Lab_6/output.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("copied successfully...");    
// })


// 9) Write a program that checks if the file config.json exists in the current directory using
// fs.existsSync() and prints the result. (B)
// const fs=require('fs');
// const filepath='output.txt'; 
// if(fs.existsSync(filepath)){
//     console.log("file exist..");
    
// }else{
//     console.log("file does not exits..");
    
// }

// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content
// changes, print: “File Changed” (C)
const fs=require('fs');
console.log(`Watching for changes in ${'.'}...`);

fs.watch('.',(change,filename)=>{
    if(change=='change'){
        console.log("file changed..");
    }
})