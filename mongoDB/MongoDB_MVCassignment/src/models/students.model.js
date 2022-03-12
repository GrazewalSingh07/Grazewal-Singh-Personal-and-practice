
const mongoose=require("mongoose");
const studSchema=new mongoose.Schema({
    roll_id:{type:Number, required:true},
    currentbatch:{
        type:mongoose.Schema.Types.ObjectId, ref:"batch",required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"user",required:true
    }
},{
    timestamps:true
})
const Stud=mongoose.model("student", studSchema)
module.exports=Stud