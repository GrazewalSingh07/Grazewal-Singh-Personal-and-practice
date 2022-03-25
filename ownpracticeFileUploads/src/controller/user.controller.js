const express=require("express");
const User = require("../model/user.model");
const router= express.Router();
const {single,multiple}= require("../middlewares/uploads");
 
router.get("/",async(req,res)=>{
    try {
        const user= await User.find().lean().exec()
        res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/",single("profile_Pic"),async(req,res)=>{
    try {
        const user= await User.create(
            {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_Pic:req.file.path
        }  
        )
        res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.patch("/:id",single("profile_Pic"),async(req,res)=>{
    try {
        if(req.file.path){
        //  var newprofile= req.file.path
           let finduser=await User.findOne({_id:req.params.id}).lean().exec();
           finduser.profile_Pic=null
          let user= await User.findByIdAndUpdate(
            req.params.id,
             {
                 profile_Pic:req.file.path
             }
            ,{new:true}).lean().exec()
            res.status(200).send(user)
    
        
        }
        else{
            let user= await User.findByIdAndUpdate(
                req.params.id,
                 req.body
                ,{new:true}).lean().exec()
                res.status(200).send(user)
        
        }
         
           
        
       
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const user= await User.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports=router