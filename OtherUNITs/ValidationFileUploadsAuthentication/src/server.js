const app=require("./index")

const connect=require("./configs/db");

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("Listening on sunday server")
    } catch (error) {
        console.log({error:error.message})
    }
})