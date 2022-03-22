const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true}
},{
    timestamps:true,
    versionKey:false
})
const Product=mongoose.model("product",productSchema)
module.exports=Product