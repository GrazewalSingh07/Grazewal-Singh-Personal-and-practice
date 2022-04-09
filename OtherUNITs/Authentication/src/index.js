const express=require("express");
const app=express();
app.use(express.json());
const userController=require("./controllers/user.controller")
const {Register, Login}=require("./controllers/auth.controller")
const productController=require("./controllers/product.controller")

app.use("/products", productController)
app.use("/user", userController)
app.post("/Register", Register)
app.post("/login",Login)
module.exports=app