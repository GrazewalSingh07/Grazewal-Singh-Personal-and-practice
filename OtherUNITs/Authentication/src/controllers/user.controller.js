const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
 router.get("/",async(req,res)=>{
     try {
         const user= await User.find({}).lean().exec()
        return res.status(200).send(user)
     } catch (error) {
         return res.status(500).send({error:error.message})
     }
 })
 module.exports=router