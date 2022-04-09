const express=require("express");
const connectDB=require("./configs/db")
const app=express();
app.use(express.json());
// importing CRUD
const usersController=require("./controllers/user.cotroller")
const studentController=require("./controllers/student.controller")
const batchController=require("./controllers/batch.controller")
const evaluationController=require("./controllers/evaluation.controller")
const submissionController=require("./controllers/submission.controller")

app.use("/user",usersController);
app.use("/student",studentController);
app.use("/batch",batchController);
app.use("/evaluation",evaluationController);
app.use("/submission",submissionController);

app.listen(4200,async()=>{
    try {
        await connectDB();
        console.log("Welcome to Grazewal's Server")
    } catch (error) {
        console.log(error)
    }
    
})