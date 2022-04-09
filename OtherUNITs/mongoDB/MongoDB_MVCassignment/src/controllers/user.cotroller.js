
const express=require("express");
const router=express.Router();
const crudcontroller=require("./CRUD.controller")
const User=require("../models/user.model")
router.post("",crudcontroller(User).post)
// app.post("/",async(req,res)=>{
//     console.log(crudcontroller(User).post)
//     try {
//         const user=await User.create(req.body)
//         return res.status(201).send(user)
//     } catch (error) {
//         console.log(error)
//     }
    
// })
router.get("/",async(req,res)=>{
    try {
        const user= await User.find().lean().exec();
        return res.status(201).send(user)
    } catch (error) {
        console.log(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/:id",async(req,res)=>{
try {
    await User.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    console.log(error)
}
})

module.exports=router