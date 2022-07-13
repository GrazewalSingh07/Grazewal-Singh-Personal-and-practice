import { useState } from "react"

export const Form=()=>{
    const [value,setvalue]=useState("")

    return <div>
        <input value={value} className="FormInput" type="text" placeholder="Form input"  onChange={(e)=>setvalue(e.target.value)} autofocus="true"/>
        <h1 className="input_val">{value}</h1>
    </div>
}