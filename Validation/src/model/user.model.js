const mongoose=require("mongoose");
 

const userSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    pincode:{type:String,required:true},
    gender:{type:String,required:true,enum:["Male","Female","Others"],default:"Male"},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    password:{type:String,requird:true},
     
})
const User=mongoose.model("user",userSchema);
module.exports=User;