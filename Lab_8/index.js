//1.A

// const express=require("express");

// const app=express();

// app.get("/",(req,res)=>{
//     res.send("<h1>hello world</h1>");
// })

// app.listen(3000,()=>{
//    console.log("server start at 3000 port");
// })


//2.B
// const express=require("express");
// const app=express();

// app.get("/Home",(req,res)=>{
//     res.send("<h1>Home page</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>About page</h1>");
// })

// app.get("/Contact",(req,res)=>{
//     res.send("<h1>contact page</h1>");
// })

// app.get("/content",(req,res)=>{
//     res.send("<h1>content page</h1>");
// })

// app.use((req,res)=>{
//     res.status(404).send("page not found");
// })

// app.listen(3000,()=>{
//     console.log("server start at port 3000");
// })

// 3-C

// const express = require("express");
// const fs=require("fs");
// const app = express();

// app.get("/Home", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

// app.get("/about", (req, res) => {
//   fs.readFile("about.txt", (err, data) => {
//     res.end(data);
//   });
// });

// app.get("/Contact", (req, res) => {
//   fs.readFile("contact.txt", (err, data) => {
//     res.end(data);
//   });
// });

// app.use((req, res) => {
//   res.status(404).send("page not found");
// });

// app.listen(3000, () => {
//   console.log("server start at port 3000");
// });


//EXTRA/////////////

const express=require("express");
const app=express();

app.use(express.json());

app.get("/Home",(req,res)=>{
    res.send("<h1>Home page</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>");
})



app.get("/user",(req,res)=>{
  res.send(req.query);
})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body
    res.send(`Name :${name},Email:${email},password: ${password}`);
})

app.get("/user/:id",(req,res)=>{
  res.send(req.params.id);
})

app.use((req,res)=>{
    res.status(404).send("page not found");
})

app.listen(3000,()=>{
    console.log("server start at port 3000");
})