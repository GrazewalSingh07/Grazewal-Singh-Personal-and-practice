import { useState } from "react"

export const AddContact=()=>{
    const [text,setText]=useState("")
    return(
        <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="number"/>
        </div>
    )
}