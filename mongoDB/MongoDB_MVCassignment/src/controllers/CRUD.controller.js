
const mongoose=require("mongoose");
const post=(model)=>async(req,res)=>{
    try {
        const item=await model.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
};
const deleteone=(model)=>async(req,res)=>{
    try {
        const item=await model.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(item)
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
}
module.exports=(model)=>{
    return{
        post:post(model),
        deleteone:deleteone(model)
    }
   
}