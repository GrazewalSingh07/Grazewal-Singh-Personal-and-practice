// tab=newest&page=3&pagesize=30
// {
//     tab:"newest",
//     page:3,
//     pagesize:30
// }
// body=>req.body,
// url=> req.params,
// query string=> req.query

// const page=req.query.page;
// const pagesize=req.query.pagesize;
// // if page= 1 then data should be from 1 to 30
// // if page= 2 then data should be from 31 to 60
// const skip=(page-1)*pagesize //1-1=0*anything=0
// //page = 2 then 2-1=1 and 1*pagesize=30
// const products=await Products.find().skip(skip).limit(pagesize).lean().exec()


// const totalPages=Math.ceil((await Products.find().countDocuments())/pagesize)
// return resizeBy.status(200).send({products,totalPages})