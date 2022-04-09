const express= require("express");
const app=express();
app.use(express.json())
module.exports=app;
const userController=require("./controllers/user.controller")
const galleryController=require("./controllers/gallery.contoller")
app.use("/user",userController)
app.use("/gallery",galleryController)