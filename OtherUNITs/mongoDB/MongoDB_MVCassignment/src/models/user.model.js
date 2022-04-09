
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:false},
    gender:{type:String, required:true},
    DOB:{type:String, required:true},
    type:{type:String, required:true}

},{
    timestamps:true
})
const User=mongoose.model("user",userSchema)
module.exports=User