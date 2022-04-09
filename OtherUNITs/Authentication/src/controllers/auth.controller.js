const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const newToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)
}
const Register=async(req,res)=>{
    try {
        // check if email already exists
        let user= await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).send({message:"Email or password incorrect"})
        }
        // create user for new email
        user= await User.create(req.body)
        const token = newToken(user)
        return res.status(200).send({user, token})
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}





const Login=async(req,res)=>{
    try {
        //check if email exists already
        let user= await User.findOne({email:req.body.email}).exec()
        if(!user){
            return res.status(400).send({message:"Email or password incorrect"})
        }
        const match=user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"Email or password incorrect"})
        }
        const token = newToken(user)
        return res.status(200).send({user, token})
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}
module.exports={Register, Login}