 
const express=require("express");
const app=express()
module.exports= app;
app.use(express.json())
const Register=require("./controller/Register")
const Signin=require("./controller/signIn")
app.use("/Register" , Register )
app.use("/Signin" , Signin )