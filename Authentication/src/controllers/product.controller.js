const express=require("express")
const router=express.Router()
const Product=require("../models/userModel")
const authenticate=require("../middleware/authenticate")
router.post("/",authenticate,async(req,res)=>{
     try {
         req.body.userID=req.userID
         const product= await Product.create(req.body)
        return res.status(200).send(product)
     } catch (error) {
         return res.status(500).send({error:error.message})
     }
 })
 module.exports=router
 