const express=require("express");

const connectDB=require("./configs/db")
const app=express();
app.use(express.json())

const userController=require("./controller/user.controller")

app.use("/user",userController)
 


app.listen(2022,async()=>{
    try {
        await connectDB();
        console.log("Listening to validator's server")
    } catch (error) {
        console.log(error)
    }
    
})
