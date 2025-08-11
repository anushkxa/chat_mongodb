const express= require("express");
const app= express();
const mongoose = require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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


app.post("/chats",(req,res)=>{
    let{from,to,msg}=req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
    newChat.save().
    then((res)=>{
        console.log("Chat was Saved")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("app is working");
})

app.listen(3000,()=>{
    console.log("port is listening");
})