const { connect } = require("./configs/db")
const app=require("./index")
app.listen(7080, async()=>{
    try {
        await connect()
        
    } catch (error) {
        console.log(error.message)
    }
})