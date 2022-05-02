import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo } from "../Redux/action"

export const Todo=()=>{
    const[text,setText]=useState("")
    const todos =useSelector((store)=>store.todo)
    const dispatch=useDispatch()

    function handleAdd(){
        dispatch(addtodo({
            title:text,
        status:false
            })
        )
    }
    return <div>
        <input type="text" placeholder="todo" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add todo</button>
        {todos.map((el)=>(
            <div key={el.title}>{el.title}</div>
        ))}
    </div>
}