const express=require("express");
const {body,validationResult}=require("express-validator");
const router=express.Router();
const User=require("../model/user.model")
const uploads=require("../middlewares/uploads")
 
router.get("/",async(req,res)=>{
    try {
        const user= await User.find().lean().exec();
        return res.status(200).send(user)
    } catch (error) {
       return res.status(500).send({message:error.message})
    }
})
// router.post("/",
// body("firstName")
// .trim()
// .not().isEmpty()
// .isLength({min:4})
// .withMessage("First Name must be of atleast 4 characters"),
// body("email").isEmail().custom(async(value)=>{
//     const user=await User.findOne({email:value})
//     if(user){
//         throw new Error("Email already exists")
//     }
//     return true;}),
// body("age").not().isEmpty().withMessage("Age cannot be empty").isNumeric().withMessage("Age must be between 1 to 120").custom((value)=>{
//     if(value<0||value>100){
//         throw new Error("Incorrect age");
//     }
//     return true
// }),
// body("password").not().isEmpty().withMessage("Password is required").custom((value)=>{
//     //regex is basically checking if the entered password is strong
//     const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
//     if(!value.match(regex)){
//         throw new Error("Password must be strong");
//     }
//  return true;
// }).custom((value,{req})=>{
//     if(value!==req.body.confirmPassword){
//         throw new Error("Password and Confirm password should match");
//     }
//     return true;
// }),
 
// body("lastName").custom((value)=>{
//     if(value&& value.isLength<4){
//         throw new Error("last Name if provided must be of atleast 4 characters");
//     }
//     return true
// }),
// body("pincode").not().isEmpty().isNumeric().isLength(6).withMessage("Please enter the right pincode"),
// body("gender").not().isEmpty(),
// async(req,res)=>{
//     try {
//         const errors=validationResult(req)
//         if(!errors.isEmpty()){
//             return res.status(400).json({error:errors.array()})
//         }
//         const user= await User.create(req.body)
//         return res.status(201).send(user)
//     } catch (error) {
//         return res.status(500).send({message:error.message})
//     }
// })
// we can pass the middleware on like uploads.single() or uploads.many()
router.post("/",uploads.single("profilepic"),async(req,res)=>{
    try {  
        // const user= await User.create(req.body)
        const user= await User.create({
            firstName:req.body.firstName,
            profilepic:req.file.path
        })
        return res.status(201).send(user)
            } catch (error) {
                return res.status(500).send({message:error.message})
            }
})
router.post("/gallery",uploads.array("gallery", 5),async(req,res)=>{
    try {  
       
        const filePath=req.files.map((file)=>{
            console.log({file})
            return file.path
        })
          console.log(req.body, req.file)
                return res.status(201).send(user)
            } catch (error) {
                return res.status(500).send({message:error.message})
            }
})

router.patch("/:id",async(req,res)=>{
    try {
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
try {
    await User.findByIdAndDelete(req.params.id)
    return res.send("Deleted")
} catch (error) {
    return res.status(500).send({message:error.message})
}
})
module.exports=router
