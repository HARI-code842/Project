const express=require("express");
const app=express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
require("./conn/conn");

const user=require("./routes/user");
const Events=require("./routes/event");
const favourite=require("./routes/favourites");

//routes
app.use("/api/v1",user);
app.use("/api/v1",Events);
app.use("/api/v1",favourite);


app.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`);

});