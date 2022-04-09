 const express=require("express")
 
 const app=express();
 app.get("home",function(req,res){
  console.log("Hellow")
 })
 app.get("/books",function(req,res){
   res.send({a:"book1", b:"book2",c:"book3",d:"book4"})
 })
 app.listen(4001,()=>{
   console.log("Listening on port 4001")
 })