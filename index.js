const express= require("express");
const app= express();
const mongoose = require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(()=>{
    console.log("connection setup");
}).catch((err)=>{
    console.log(err);
})

app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("app is working");
})

app.listen(3000,()=>{
    console.log("port is listening");
})