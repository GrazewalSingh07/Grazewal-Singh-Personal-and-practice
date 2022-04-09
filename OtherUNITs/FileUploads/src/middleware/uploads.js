const multer=require("multer")
const path=require('path');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,  path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, callback) {
      const uniquePreffix = Date.now()  
      callback(null,  uniquePreffix+ '-' + file.originalname )
    }
  })
  
  
  const fileFilter =(req, file, callback)=> {
 
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
        callback(null, true);
    }
   else{
    callback(null,false);
   }
  }
const options={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        filesize: 1024*1024* 10
    },
}
const uploads= multer(options)
const single=(formkey)=>{
    return function(req,res,next){
        const uplodedItem=uploads.single(formkey);
        return uplodedItem(req,res,function(err){
            if (err instanceof multer.MulterError) {
                return res.status(500).send({message:err.code.message})
              } else if (err) {
                // An unknown error occurred when uploading.
                return res.status(501).send({message:err.message})
              }
            //   everything went fine
            return next()
          
        })
    }
}
const multiple=(formkey)=>{
    return function(req,res,next){
        const uplodedItems=uploads.any('profilepic');
        return uplodedItems(req,res,function(err){
            if (err instanceof multer.MulterError) {
                return res.status(500).send({message:err.code.message})
              } else if (err) {
                // An unknown error occurred when uploading.
                return res.status(501).send({message:err.message})
              }
            //   everything went fine
            return next()
          
        })
    }
}

module.exports= {single, multiple}