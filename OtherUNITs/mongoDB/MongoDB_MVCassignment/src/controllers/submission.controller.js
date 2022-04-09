const express=require("express");
const router=express.Router();
const Submission=require("../models/submission.model")
router.post("/",async(req,res)=>{
    try {
        const submission=await Submission.create(req.body)
        return res.status(201).send(submission)
    } catch (error) {
        console.log("error")
    }
    
})
router.get("/",async(req,res)=>{
    try {
        const submission= await Submission.find().populate({path:"evaluation_id", populate:{path:"instructor"}, populate:{path:"batchId"}}).populate({path:"student_id", populate:{path:"currentbatch"}, populate:{path:"userId"}}).lean().exec();
        return res.status(201).send(submission)
    } catch (error) {
        console.log(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const submission= await Submission.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(submission)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/:id",async(req,res)=>{
try {
    await Submission.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    console.log(error)
}
})
module.exports=router