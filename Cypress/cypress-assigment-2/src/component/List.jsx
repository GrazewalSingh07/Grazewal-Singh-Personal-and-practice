 
import { useState } from "react"

export const List=()=>{
    const [todo ,settodo] =useState(["Learn React","Learn Cypress"])
    const [text,settext]=useState("")
    const [error,seterror]=useState(false)
    const handlesubmit=(e)=>{
      if(text){
        settext("")
        settodo([...todo,text])
        seterror(false)
      }
      else{
        seterror(true)
      }
    }
    return <> 
        <input className="input_todo" type="text" placeholder="add todo"  value={text} onChange={(e)=>{ settext(e.target.value)}}/>
        <input className="input_submit" type="submit"  onClick={handlesubmit} />
        <ul type="none" className="list">
            {todo.map((el)=>(
                <li>{el}</li>
            ))}
        </ul>
        {error?<h2 className="error">Something went wrong</h2>:null}
    </>
}