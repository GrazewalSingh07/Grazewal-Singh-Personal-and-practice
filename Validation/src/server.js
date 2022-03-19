const app=require("./index")
const connectDB=require("./configs/db")
 app.listen(2022,async()=>{
    try {
        await connectDB();
        console.log("Listening to validator's server")
    } catch (error) {
        console.log(error)
    }
    
})

