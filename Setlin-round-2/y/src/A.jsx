import { useState } from "react"

export const A=({name})=>{
    const [age,setage]=useState(20)
    return <div>
        <p>{age}</p>
        <p>{name}</p>
        <button onClick={()=>setage(30)}></button>
    </div>
}