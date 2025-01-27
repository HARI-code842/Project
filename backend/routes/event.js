const router=require("express").Router();
const User=require("../models/user");
const jwt=require("jsonwebtoken");
const Event=require("../models/events");
const {authenticateToken}=require("./userAuth");

//add event--admin
router.post("/add-event",authenticateToken, async(req,res)=>{
    try {
        const {id}=req.headers;
        const user=await User.findById(id);
        if (user.role !=="admin"){
            return res.status(400).json({message:"you dont have access to perform admin work"});

        }

        const event=new Event({
            url: req.body.url,
            title: req.body.title,
            desc:req.body.desc,
        });
        await event.save();
        res.status(200).json({message:"event added successfully"});
        
    } catch (error) {
        res.status(500).json({message:"internal server error"});
        
    }
});

//update-event
router.put("/update-event",authenticateToken, async(req,res)=>{
    try {
        const {eventid}=req.headers;
       await Event.findByIdAndUpdate(eventid,{

            url: req.body.url,
            title: req.body.title,
            name:req.body.name,
            price:req.body.price,
            desc:req.body.desc,
        });
        
        res.status(200).json({message:"event updated successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"an error occurred"});
        
    }
});

//delete-event
router.delete("/delete-event",authenticateToken,async (req,res)=>{
   try {
    const {eventid}=req.headers;
    await Event.findByIdAndDelete(eventid);
    return res.status(200).json({message:"event deleted successfully"});
    
   } catch (error) {
    console.log(error);
    return res.status(500).json({message:"an error occurred"});
    
   }
});

//get all-events
router.get("/get-all-events",async (req,res)=>{
    try {
        const event=await Event.find().sort({createdAt:-1});
        return res.json({
            status:"success",
            data:event,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
        
    }
});

//get-recently-added-events
router.get("/get-recent-events",async (req,res)=>{
    try {
        const events=await Event.find().sort({createdAt:-1}).limit(3);
        return res.json({
            status:"success",
            data:events,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
        
    }
});

//get-event-by-id
router.get("/get-event-by-id/:id",async (req,res)=>{
    try {
        const {id}=req.params;
        const event=await Event.findById(id);
        return res.json({
            status:"success",
            data:event,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
        
    }
});

module.exports=router;