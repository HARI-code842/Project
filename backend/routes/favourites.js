const router=require("express").Router();
const User=require("../models/user");
const {authenticateToken}=require("./userAuth");

//add event to favourite
router.put("/add-event-to-favourite",authenticateToken,async (req,res)=>{
    try {
        const {eventid,id}=req.headers;
        const userData= await User.findById(id);
        const isEventFavourite=userData.favourites.includes(eventid);
        if (isEventFavourite){
            return res.status(200).json({message:"event is already in favourites"});
        }
        await User.findByIdAndUpdate(id,{$push:{favourites :eventid}});
        return res.status(200).json({message:"event added to favourites"});

        
    } catch (error) {
        res.status(500).json({message:"an error occurred"});
        
    }
});

//DELETE EVENT
router.put("/delete-event-from-favourite",authenticateToken,async (req,res)=>{
    try {
        const {eventid,id}=req.headers;
        const userData= await User.findById(id);
        const isEventFavourite=userData.favourites.includes(eventid);
        if (isEventFavourite){
            await User.findByIdAndUpdate(id,{$push:{favourites :eventid}});
        }
        
        return res.status(200).json({message:"event removed from favourites"});

        
    } catch (error) {
        res.status(500).json({message:"an error occurred"});
        
    }
});

//get-fav-of-part-user
router.get("/get-favourite-events",authenticateToken,async (req,res)=>{
    try {
        const {id}=req.headers;
        const userData= await User.findById(id).populate("favourites");
        const favouriteBooks=userData.favourites;
        
        
        return res.json({
            status:"success",
            data:favouriteBooks,
        });

        
    } catch (error) {
        res.status(500).json({message:"an error occurred"});
        
    }
});
module.exports=router;