const express = require("express");
const mongoose = require("mongoose");
 


const app=express();
app.use(express.json());
//connecting mongoDB
const connectDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/web15")}
//creating schema model and route for books

const bookSchema=new mongoose.Schema(
    {
        name:{type:String, required:true},
        // author:{type:String,required:true},
        body:{type:String,required:false},
        sectionsId:{
            type:mongoose.Schema.Types.ObjectId, ref:"section",required:true
        },
        authorsId:{
            type:mongoose.Schema.Types.ObjectId, ref:"author", required:true
        },
        checkoutId:{
            type:mongoose.Schema.Types.ObjectId, ref:"checkout", required:true
        }
         
    },
    {
        versionKey:false,

    }
     
)

const Book=mongoose.model("book",bookSchema);
app.post("/books",async(req,res)=>{
    const book=await Book.create(req.body);
    return res.status(201).send(book)
})
app.get("/books",async(req,res)=>{
    const books= await Book.find().populate({path:"sectionsId",select:{"name":1}}).populate("authorsId").lean().exec();
    return res.status(201).send(books);
})
app.patch("/books/:id",async(req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).send(book)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
})
app.delete("/books/:id",async(req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(book)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    } 
})

//creating schema model route forr section

const sectionSchema=new mongoose.Schema({
    name:{type:String, required:true}
},{
    versionKey:false,

})

const Section=mongoose.model("section",sectionSchema)

app.post("/section",async(req,res)=>{
    try {
        const section= await Section.create(req.body)
        return res.status(201).send(section);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
    
})
app.get("/section",async(req,res)=>{
    try {
        const section=await Section.find({}).lean().exec();
        return res.status(201).send(section)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
   
})
app.patch("/section/:id",async(req,res)=>{
    try {
        const section =await Section.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(201).send(section)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
   
})

app.delete("/section/:id",async(req,res)=>{
    try {
        const section=await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(section)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
   
})


//create author schema model and route for authors

const authorSchema=new mongoose.Schema(
    {
        first_name:{type:String, required:true},
        last_name:{type:String,required:false},
    },
    {
        versionKey:false,

    }
)
const Author=mongoose.model("author",authorSchema);

app.post("/author",async(req,res)=>{
    try {
        const author=await Author.create(req.body)
        return res.status(201).send(author);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }

})
app.get("/author",async(req,res)=>{
    try {
        const author=await Author.find({}).lean().exec();
        return res.status(201).send(author)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
})
app.patch("/author/:id",async(req,res)=>{
    try {
        const author=await Author.findByIdAndUpdate(req.params.id,req.body, {new:true});
    return res.status(201).send(author)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
})
app.delete("/author/:id",async(req,res)=>{
    try {
        const author=await Author.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(author)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
})

//creating checkedout schema model and route

const checkoutSchema=new mongoose.Schema(
    {
    name:{type:String, required:true},
    bookId:{type:mongoose.Schema.Types.ObjectId, ref:"book",required:true },
    // availability:{type:Boolean}
    },
{
    versionKey:false,
    timestamps:true

})

const Checkout=mongoose.model("checkout", checkoutSchema)

 
app.get("/checkout",async(req,res)=>{
    try {
        const checkout=await Checkout.find().populate("bookId").lean().exec();
    return res.status(201).send(checkout);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
    
})
app.post("/checkout",async(req,res)=>{
    try {
        const checkedout=await Checkout.create(req.body)
        return res.status(201).send(checkedout)
    } catch (error) {
        return res.status(500).send({message:"Something went wrong try agin later"})
    }
   
})
// function checkavailablity(req,res,next){
 
// }
app.listen(3333,async ()=>{
    try {
        await connectDB();
        console.log("Listening on Grazewal's Library");
    } catch (error) {
        console.log("error")
    }
})