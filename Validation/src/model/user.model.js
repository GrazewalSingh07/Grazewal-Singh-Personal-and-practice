const mongoose=require("mongoose");
 

const userSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:false},
    pincode:{type:String,required:false},
    gender:{type:String,required:false,enum:["Male","Female","Others"],default:"Male"},
    age:{type:Number,required:false},
    email:{type:String,required:false},
    password:{type:String,requird:false},
    profilepic:[{type:String,required:false}] ,
    gallery:[{type:String,required:false}]    
},{
    versionKey:false,
    timestamps:true
    
})
const User=mongoose.model("user",userSchema);
module.exports=User;