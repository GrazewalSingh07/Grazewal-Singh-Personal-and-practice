const express= require("express");
const app=express();
app.use(express.json())
const userController= require("./controller/user.controller");
const galleryController=require("./controller/gallery.controller")

 
 




app.use("/user",userController)
app.use("/gallery",galleryController)
module.exports=app