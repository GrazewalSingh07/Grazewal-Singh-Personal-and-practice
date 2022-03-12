

const express=require("express");
const app=express();

const Stud=require("../models/students.model")


app.post("/",async(req,res)=>{
    try {
        const stud=await Stud.create(req.body)
        return res.status(201).send(stud)
    } catch (error) {
        console.log("error")
    }
    
})
app.get("/",async(req,res)=>{
    try {
        const stud= await Stud.find().populate("userId").populate("currentbatch").lean().exec();
        return res.status(201).send(stud)
    } catch (error) {
        console.log(error)
    }
})
app.patch("/:id",async(req,res)=>{
    try {
        const stud= await Stud.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(stud)
    } catch (error) {
        console.log(error)
    }
})
app.delete("/:id",async(req,res)=>{
try {
    await Stud.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    console.log(error)
}
})
module.exports=app