const express=require("express");
const router=express.Router();

const Evaluation=require("../models/evaluation.model")
router.post("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.create(req.body)
        return res.status(201).send(evaluation)
    } catch (error) {
        console.log("error")
    }
    
})
router.get("/",async(req,res)=>{
    try {
        const evaluation= await Evaluation.find().lean().exec();
        return res.status(201).send(evaluation)
    } catch (error) {
        console.log(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const evaluation= await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/:id",async(req,res)=>{
try {
    await Evaluation.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    console.log(error)
}
})
module.exports=router