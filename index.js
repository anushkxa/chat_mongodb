const express= require("express");
const app= express();
const mongoose = require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("view",path.join(__dirname,"views"));
app.set("view engine","ejs");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Chat1= new Chat({
    from:"Neha",
    to:"Priya",
    msg:"Send me notes",
    created_at:new Date()
});

Chat1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


main().then(()=>{
    console.log("connection setup");
}).catch((err)=>{
    console.log(err);
})


app.get("/",(req,res)=>{
    res.send("app is working");
})

app.get("/chat",(res,req)=>{

})



app.listen(8080,()=>{
    console.log("port is listening");
})