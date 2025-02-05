const mongoose=require("mongoose");
const user=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"data:image/jpeg;base64,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"
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    favourites:[{
        type:mongoose.Types.ObjectId,
        ref:"events"
    },],
    cart:[{
        type:mongoose.Types.ObjectId,
        ref:"events"
    },],
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"events"
    },]
},
{timestamps:true}
);
module.exports=mongoose.model("user",user);