import { useState } from "react"

export const B=()=>{
    const [name,setname]=useState("abc")
    return <div>
        <B name={name}/>
        <button onClick={()=>setname("xyz")}>name</button>
    </div>
}