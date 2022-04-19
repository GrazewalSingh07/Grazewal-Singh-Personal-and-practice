import { useState } from "react"

export const TodoInput=({getData})=>{
    const [text,setText]=useState("")
    return(
        <div>
            <input  onChange={(e)=>{
            
                setText(e.target.value)
            }}

            type="text"
             placeholder="Todo Task"></input>
            <button onClick={()=>{
                getData(text)
            }}>Add to todo list</button>
        </div>
    )
}
 