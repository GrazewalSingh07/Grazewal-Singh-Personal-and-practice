import { useState } from "react"

export const Counter=()=>{
    const [count,setcount]=useState(0)
    return <div>
         <h1>Count :{count}</h1>
         <button className="IncButton" onClick={()=>setcount(count+1)}> +1</button>
    </div>

}