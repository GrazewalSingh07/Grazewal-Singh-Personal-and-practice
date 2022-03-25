const express= require("express");
const router= express.Router();
// const path=require("path")
const User= require("../modols/user.model")
const {single, multiple}=require("../middleware/uploads")
const uploads=require("../middleware/uploads")



router.post("/", single("profilepic"),async(req,res)=>{
    try {
        
        const user= await User.create(
            {
                firstName:req.body.firstName,
                profilepic:req.file.path,
                 
            }
        );
         
        return res.status(200).send(user)
    } catch (error) {
       return  res.status(400).send({error:error.message})
    }
})
router.post("/multiple",multiple("profilepic"),async(req,res)=>{
    try {
        const filePaths=req.files.map((file)=>{
            return file.path
        })
        const user= await User.create(
            {
                firstName:req.body.firstName,
                profilepic:filePaths,
                 
            }
        );
       
        return res.status(200).send(user)
    } catch (error) {
       return  res.status(400).send({error:error.message})
    }
})


module.exports=router