const express= require("express");
const app= express();
const mongoose = require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("View",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));


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
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("app is working");
})

app.listen(8080,()=>{
    console.log("port is listening");
})