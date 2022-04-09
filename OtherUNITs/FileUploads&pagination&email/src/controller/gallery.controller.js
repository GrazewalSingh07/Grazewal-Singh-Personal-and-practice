const express=require("express");
const Gallery = require("../model/gallery.model");
const router= express.Router();
const {single,multiple}= require("../middlewares/uploads")
router.get("/",async(req,res)=>{
    try {
        const gallery= await Gallery.find().lean().exec()
        res.status(200).send(gallery)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/",multiple("gallery"),async(req,res)=>{
    try {
        const filePath=req.files.map((file)=>{
            return file.path
        })
        const gallery= await Gallery.create(
            {
             user_id:req.body.user_id,
            gallery:filePath
        }  
        )
        res.status(200).send(gallery)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const gallery= await Gallery.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()
        res.status(200).send(gallery)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const gallery= await Gallery.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send(gallery)
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports=router