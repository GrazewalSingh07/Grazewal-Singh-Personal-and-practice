import React from "react";


function Counter(){
   let [count,setCount]=React.useState(0)
    const handleClick=()=>{
        console.log(++count)
    }
    const handleClickCorrectly=()=>{
        // setCount(count+1)
        setCount((prev)=>prev+1)
        console.log(count)
    }
    return(
        <div>
            <h3>Count {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClickCorrectly}>AddCorrectly</button>
        </div>
    )
}
export default Counter

// function __useState(initvalue){
//     let __val= initvalue;
//     let setValue=(value)=>{
//         if(typeof value)=="function"
//     }
// }