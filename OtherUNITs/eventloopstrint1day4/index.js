const express= require("express")
const app=express();
// app.use(middleware)// we dont execute the function here


// app.get("/",(req,res)=>{
//     return res.send("This is Grazewal From Masai")
// })



// app.post("/students",student,(req,res)=>{

  
//  return res.send({route:"/students"})
// })

app.post("/books",books,(req,res)=>{
    return res.send({route:"books",book1:req.name})
})

function books(req,res,next){
    console.log("Fetching all books");
    req.name="Game of thrones"
    next();
}
// app.post("/admin",admin ,(req,res)=>{

   
//     return res.send({route:"/admin",lastname:req.lastname})
// })


// function admin(req,res,next){
//     req.lastname="Singh"
//     //  res.send({name:"Grazewal Singh"})
   
//     next();
//     console.log("after route handler admin")
// }


// function student(req,res,next){
    
    
//     next();
    
//     console.log("middlewre after") 
// }



app.listen(4001,()=>{
    console.log("Listening on Grazewal's server")
})