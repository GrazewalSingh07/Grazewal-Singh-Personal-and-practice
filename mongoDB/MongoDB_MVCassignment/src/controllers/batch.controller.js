const express=require("express");
const router=express.Router();
const Batch=require("../models/batch.model")
router.post("/",async(req,res)=>{
    try {
        const batch=await Batch.create(req.body)
        return res.status(201).send(batch)
    } catch (error) {
        console.log("error")
    }
    
})
router.get("/",async(req,res)=>{
    try {
        const batch= await Batch.find().lean().exec();
        return res.status(201).send(batch)
    } catch (error) {
        console.log(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const batch= await Batch.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/:id",async(req,res)=>{
try {
    await Batch.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    console.log(error)
}
})
module.exports=router