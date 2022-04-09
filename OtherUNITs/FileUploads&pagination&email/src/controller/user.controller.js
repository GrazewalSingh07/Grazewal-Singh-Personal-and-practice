const express=require("express");
const User = require("../model/user.model");
const router= express.Router();
const transporter=require("../configs/mail")
const {single,multiple}= require("../middlewares/uploads");
 
router.get("/",async(req,res)=>{
    try {
       const page=req.query.page
       const pagesize=req.query.pagesize||10
       const skip=(page-1)*pagesize
        const user= await User.find().skip(skip).limit(pagesize).lean().exec()
        const totalpage=Math.ceil(await User.find().countDocuments()/pagesize)
        res.status(200).send({user, totalpage})
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
            email:req.body.email,
            profile_Pic:req.file.path
        })
       
         transporter.sendMail({
            from: '" Grazewal Singh 👻" <foo@example.com>', // sender address
            to: user.email ,
            subject: "Welcome to ABC ", // Subject line
            text: "Hi"+user.first_name+ "Please confirm your email address"+user, // plain text body
            html: "<b>Your post is public now</b>", // html body
          });
        
        res.status(200).send({message:"Product created successfully",user})
    } catch (error) {
        return res.status(400).send({error:error.message})
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
            res.status(200).send({message:user})
         }
        else{
            let user= await User.findByIdAndUpdate(
                req.params.id,
                 req.body
                ,{new:true}).lean().exec()
                res.status(200).send(user)
        
        }
    } catch (error) {
        return res.status(400).send({error:error.message})
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