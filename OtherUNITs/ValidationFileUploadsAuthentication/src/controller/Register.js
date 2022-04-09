const express=require("express");
const {body, validationResult}=require("express-validator")
const User = require("../model/user.model");
var jwt = require('jsonwebtoken');
require('dotenv').config()
const router=express.Router();

function newToken(user){
   return jwt.sign({user}, process.env.SECRET_KEY);
}
router.get("/",async(req,res)=>{
    try {
        const user= await User.find({}).lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.post("/",body("firstName").not().isEmpty().withMessage("Please enter first name"),body("lastName").custom((value)=>{
    if(value && value.legth<4){
        throw new Error("Last name if entered must be atleast 3 characters")
    }
    return true
   }),
   body("email").not().isEmpty().isEmail().withMessage("'Please enter email").custom(async(value)=>{
    let user= await User.findOne({email:value}).lean().exec()
    if(user){
       throw new Error("Email already exists")
    }
    return true
    
   }),
    body("password").not().isEmpty().custom((value)=>{
       let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       if(!value.match(regex)){
                   throw new Error("Password must be strong");
               }
            return true;
       
   }),async(req,res)=>{
    try {
        const errors=validationResult(req)
                if(!errors.isEmpty()){
                    return res.status(400).json({error:errors.array()})
                }
        const user= await User.create(req.body)
        const token = newToken(user);
        return res.status(200).send({user,token})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
 





module.exports=router








