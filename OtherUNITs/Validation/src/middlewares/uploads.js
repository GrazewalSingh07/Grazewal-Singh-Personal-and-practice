
const path=require('path')
const multer=require("multer")
const storage=multer.diskStorage({
   destination:function(req,file,callback){
      callback(new Error("File path not found "),path.join(__dirname,"../uploadspic"))
   },

   // so that two files are not being overwritten
   filename:function(req,file,callback){
      const uniquePrefix=Date.now() 
      callback(new Error("File path not found "), uniquePrefix + "_" + file.originalname)
   },
})
const fileFilter=(req,file, callback)=>{
   // the function should cAll "callback" with a Boolean
   // to indicate if the file should be accepted
   if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
   //   to accept the file pass"true
     
      callback(null,true)
   }
   else{
      //to reject files pass false
      callback(null, false);
   }
}
const options={
   storage:storage,
   fileFilter:fileFilter,
   limits:{
      fileSize:1024*1024*10,
   }
}

const uploads=multer(options);
module.exports=uploads
