const express=require("express")
const router=express.Router()
const Product=require("../models/product.model")
const authenticate=require("../middleware/authenticate")
router.post("/",authenticate,async(req,res)=>{
     try {
         req.body.userID=req.user._id
         console.log(req.body)
         const product= await Product.create(req.body)
        return res.status(200).send(product)
     } catch (error) {
         return res.status(500).send({error:error.message})
     }
 })
 
 router.get("/",authenticate,async(req,res)=>{
    try {
         
        const product= await Product.find().lean().exec()
       return res.status(200).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports=router