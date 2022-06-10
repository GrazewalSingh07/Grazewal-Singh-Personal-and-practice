import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "nanoid"
 
export const TodoInput=()=>{
const dispatch=useDispatch()

    const [todo,settemptodo]=useState("")
    function submitTodo(){
        if(todo!=""){
           axios.post("http://localhost:8080/todos",{
               id: nanoid(),
               title:todo,
               status:false
           }).then((res)=>{
               dispatch({
                   type:"RELOAD"
               })
               dispatch({type:'fetchtodoSucess'})
           }).catch((err)=>{
                dispatch({type:"fetchtodoFailure"})
           })
        }
    }
    return <div>
        <input type="text" value={todo} placeholder="what is next" onChange={(e)=>{settemptodo(e.target.value)}}/>
        <button onClick={submitTodo}>submit</button>
    </div>
}