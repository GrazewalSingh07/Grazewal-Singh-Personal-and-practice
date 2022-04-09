
const mongoose=require("mongoose");
const studSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"user",required:true
    },
    evaluationId:{ type:mongoose.Schema.Types.ObjectId, ref:"evaluation",required:true},
    marks:{type:Number},
    roll_id:{type:Number, required:true},
    currentbatch:{
        type:mongoose.Schema.Types.ObjectId, ref:"batch",required:true
    },
    
},{
    timestamps:true
})
const Stud=mongoose.model("student", studSchema)
module.exports=Stud