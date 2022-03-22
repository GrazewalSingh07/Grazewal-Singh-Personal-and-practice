require("dotenv").config();
const jwt=require("jsonwebtoken");
 
 
const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        var decodedResult=jwt.verify(token,process.env.SECRET_KEY,(error, decoded)=>{
            if(err){
                return reject(error)
            }
            //decoded will the orginal value of the user
            // basically this middleware return us the user detail
            return resolve(decoded)
        });
    });

}
const authenticate= async (req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(400).send({message:"Authorization token not found or incorrect"})
        
    }
    if(req.headers.authorization.startWith("Bearer ")){
        return res.status(400).send({message:"Authorization token not found or incorrect"})
    }
    const token=req.header.authorization.split(" ")[1]

    let decoded;
    try {
        decoded=await verifyToken(token)
    } catch (error) {
        return res.status(400).send({message:"Authorization token not found or incorrect"})
    }
    req.user=decoded.user
    return next()
}
module.exports=authenticate