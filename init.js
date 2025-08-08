const mongoose = require("mongoose");
const Chat=require("./models/chat.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(()=>{
    console.log("connection setup");
}).catch((err)=>{
    console.log(err);
})

let allChats=[
    {
    from:"Piyush",
    to:"Aman",
    msg:"Kya kr haha hai",
    created_at:new Date()
    },
    {
    from:"Jayesh",
    to:"Ananat",
    msg:"Sene me homework",
    created_at:new Date()
    },
    {
    from:"Ridhi",
    to:"Anu",
    msg:"You are beautiful",
    created_at:new Date()
    },
    {
    from:"Tiya",
    to:"Anshika",
    msg:"Neche Aaaja",
    created_at:new Date()
    },
    {
    from:"Anushka",
    to:"Gagan",
    msg:"All is well",
    created_at:new Date()
    },
];

Chat.insertMany(allChats);



