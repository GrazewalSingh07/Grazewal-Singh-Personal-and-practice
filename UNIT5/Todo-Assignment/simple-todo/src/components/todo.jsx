
import { useState } from "react"
export const Todo=({fun})=>{
    const [text,setText]=useState("")
    const [todo, setTodo]=useState([])

    function handleChange(e){
        e.preventDefault()
        setText(e.target.value)
    }
   
    function handleSubmit(e){
        e.preventDefault()
         
       setTodo([...todo,
        text]
        )
        
    }
   fun(todo)
    // console.log(todo)
return(
    <div >
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} id= "input" name="title" type="text" placeholder="Write Something"/> 
            <input id="submit" name="submit" type="submit" value="+" />
        </form>
        
    </div>
)
}