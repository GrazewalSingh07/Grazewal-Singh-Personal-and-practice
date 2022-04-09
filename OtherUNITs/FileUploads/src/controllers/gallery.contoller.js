
const express= require("express");
const router= express.Router();
// const path=require("path")
const Gallery= require("../modols/gallery.model")
const {single, multiple}=require("../middleware/uploads")


router.post("/gallery",multiple("gallery"),async(req,res)=>{
    try {
        //req.body will contain name and everything
        //req.file will contain file 
        const user= await Gallery.create(
            {
                userId:req.body.userId,
                gallery:req.file.path
            }
        );
        return res.status(200).send(user)
    } catch (error) {
       return  res.status(400).send({error:error.message})
    }
})
module.exports= router