const path=require('path');
const os=require('os');

// 1) Write a Node.js program that prints the directory name, file name, file extension, and full
// path of the code file. (A)

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(__filename);

// 2) Create a program that joins "users", "arjun", "documents", "project" into a single path using
// path.join(). (A)
// console.log(path.join("user","arjun","documents","project"));

// 3) Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and
// display the clean normalised path. (A)
// console.log(path.normalize("//folder//subfolder////file.txt"));

// 4) Write a program that checks whether the given path is absolute or relative paths. (A)
// console.log(path.isAbsolute("//folder//subfolder////file.txt"));
// console.log(path.isAbsolute(".//folder//subfolder////file.txt"));
// console.log(path.isAbsolute("C:\Users\Radhika Karena\Videos\Captures"));

// 5) Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js"
// into an absolute path. Print the final resolved path. (A)
// console.log(path.resolve("folder", "subfolder", "app.js"));

// 6) Write a program that prints: (A)
// • Operating system name
// • Release version
// • Platform
// • Architecture

// console.log(os.type());
// console.log(os.version());
// console.log(os.platform());
// console.log(os.arch());

// 7) Write a program that prints the total memory and free memory in GB (B)
// const res=os.totalmem();
// const gb=res/(1024*1024*1024);
// console.log(gb);

// 8) Write a Node.js program that prints details about the currently logged-in user in operating
// system. (B)

// console.log(os.userInfo());

// 9) Write a program that prints how long the system has been running (uptime) in seconds and in
// hours. (B)
// const res=os.uptime();
// console.log(res);

// const hours=res/3600
// console.log(hours);

// 10) Write a Node.js program that prints: (B)
// • Number of CPU cores
// console.log(os.cpus());

// • Model name of each core
// const cpu=os.cpus();
// cpu.forEach((cpu,index)=>{
//     console.log(`Core ${index+1}:${cpu.model}`);
// });

// • Network interface details
console.log(os.networkInterfaces());
