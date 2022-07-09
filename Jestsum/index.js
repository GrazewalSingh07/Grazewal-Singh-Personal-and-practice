
// It should perform this sum operation
function sum(...args){
   let numbers= args.map(Number)
    
    return numbers.reduce((av,cv)=>{
        if(cv<0){
           cv= cv*-1
        }
        return av+=cv
    },0)
    
}
//  console.log(sum("10",3))
module.exports=sum