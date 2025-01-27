const mongoose = require("mongoose");
const event=new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
},
{timestamps:true}
);
module.exports=mongoose.model("events",event);