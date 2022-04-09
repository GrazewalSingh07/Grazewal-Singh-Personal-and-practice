const express=require("express")
const app=express()
app.use(logger)
app.get("/books",(req,res)=>{
return res.send({route:"/books"})
})
app.get("/libraries",checkPermission("librarian"),(req,res)=>{
    return res.send({route:"/libraries",permission:req.permission})
})

app.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({route:"/authors",permission:req.permission})
})
app.listen(4000,()=>{
    console.log("Listening on grazewal's server")
})
function logger(req,res,next){
    console.log("before logger")
    next();
    console.log("after logger")
}
function checkPermission(str){
  return  function checkPermission(req,res,next){
        if(req.path=="/libraries"&&str=="librarian"){
            req.permission="true"
        }
        if(req.path=="/authors"&&str=="author"){
            req.permission="true"
        }
        next()
    }
}
// function checkPermission(req,res,next){
//     if(req.path=="/libraries"){
//         req.permission="true"
//     }
//     if(req.path=="/authors"){
//         req.permission="true"
//     }
//     next()
// }