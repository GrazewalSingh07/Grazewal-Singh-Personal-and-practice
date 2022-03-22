const app=require("./index")
const connectDB=require("./configs/db")
app.listen(4000,async()=>{
    try {
        await connectDB()
        console.log("Listening on authentication server")
    } catch (error) {
        console.log({error:error.message})
    }
})