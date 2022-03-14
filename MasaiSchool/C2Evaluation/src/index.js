const { text } = require("express");
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const connectDB=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/C2EVAL")
}
//creatioimg schemma model crud
const userSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    middleName:{type:String,required:false},
    lastName:{type:String,required:true},
    age:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true,default:"Female"},
    type:{type:String,required:false,default:"Customer"},
    masterAccount:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",required:true}
    
},{
    timestamps:true
});
const User=mongoose.model("user",userSchema)
app.get("/user",async(req,res)=>{
    try {
        const user=await User.find().lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})

app.post("/user",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
// user///
// --------------
//branch
const branchSchema=new mongoose.Schema({
    name:{ type:String,required:true},
    address:{type:String,required:true},
    IFSC :{type:String,required:true},
    MICR:{type:Number,required :true},
     
},{
    timestamps:true
})
const Branch=mongoose.model("branch",branchSchema);
app.post("/branch",async(req,res)=>{
    try {
        const branch=await Branch.create(req.body)
        return res.status(201).send(branch)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
app.get("/branch",async(req,res)=>{
    try {
        const user=await Branch.find().lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
//branch end

//masterstart
const masterAccountSchema=new mongoose.Schema({
  balance:{type:Number,required:true},
//   fixedaccount:{type:mongoose.Schema.Types.ObjectId,ref:'fixedAacount',required:true},
//   savingaccount:{type:mongoose.Schema.Types.ObjectId,ref:'savingaccount',required:true},
  userId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true}

},

{
    timestamps:true
})

const MasterAccount=mongoose.model("masterAccount", masterAccountSchema)

app.get("/masteraccount:id",async(req,res)=>{
    try {
        const masteraccount=await MasterAccount.find(req.params.id).populate("userId").lean().exec()
        return res.status(201).send(masteraccount)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
const savingAccountSchema=new mongoose.Schema(
    { 
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    // masterAccount:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",required:true},
  
    accountNumber:{type:Number,require:true},
    balance:{type:Number,required:true},
    intrestRate:{type:String,required:true},
    masterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"masteraccount",required:true}

},
{
    timestamps:true
})

const SavingAccount=mongoose.model("savingAccount", savingAccountSchema)

app.post("/savingccount",async(req,res)=>{
    try {
        const savingaccount=await SavingAccount.create(req.body)
        return res.status(201).send(savingaccount)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
app.get("/savingaccount",async(req,res)=>{
    try {
        const savingaccount=await SavingAccount.find().lean().exec()
        return res.status(201).send(savingaccount)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})

const fixedAccountSchema=new mongoose.Schema(
    {
    // masterAccount:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    accountNumber:{type:Number,require:true},
    balance:{type:Number,required:true},
    intrestRate:{type:String,required:true},
    startDate:{type:String,required:true},
    maturityDate:{type:String,required:true},
    masterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"masteraccount",required:true}

},
{
    timestamps:true
})

const FixedAccount=mongoose.model("fixedAccount", fixedAccountSchema)
app.post("/fixedaccount",async(req,res)=>{
    try {
        const fixedaccount=await FixedAccount.create(req.body)
        return res.status(201).send(fixedaccount)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})
app.get("/fixedaccount",async(req,res)=>{
    try {
        const fixedaccount=await FixedAccount.find().lean().exec()
        return fixedaccount.status(201).send(fixedaccount)
    } catch (error) {
        return res.status(500).send({message:res.message})
    }
})















app.listen(2300,async()=>{
    try {
        await connectDB();
        console.log("Listening on Grazewal's Port 2300")
    } catch (error) {
        console.log(error)
    }
   
    
})