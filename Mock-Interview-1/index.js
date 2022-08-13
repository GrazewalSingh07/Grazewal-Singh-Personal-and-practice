let sum=5
// find triplet

// for(let i=1;i<sum-1;i++){
//     for(let j =1;j<sum-1;j++){
//         for(let k=1;k<sum-1;k++){
//             if(i+j+k==sum){
//                 console.log(i,j,k)
//             }
//         }
//     }
// }

for(let i=1;i<sum-1;i++){
    for(let j =1;j<sum-1;j++){
        if(i+j<sum){
            let temp=sum-(i+j)
            console.log(i,j,temp)
        }
        
    }
}