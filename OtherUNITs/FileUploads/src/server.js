const app= require("./index")
const connect=require("./configs/db")
app.listen(5500,async()=>{
try {
    await connect();
    console.log("Listening on multer's server")
} catch (error) {
    console.log({error:error.message})
}
})