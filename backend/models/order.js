const mongoose = require("mongoose");
const order=new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user"          
    },
    event:{
        type: mongoose.Types.ObjectId,
        ref:"events"          
    },
    status:{
        type: String,
        default:"Order Placed",       
        enum:["Order Placed","Out for delivery,Delivered,Cancelled"]    
    }
},
{timestamps:true}
);
module.exports=mongoose.model("order",order);
