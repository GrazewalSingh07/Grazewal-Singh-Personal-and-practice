import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompletedTodos, getTodos } from "../../redux/todo/action"

export const Total=()=>{
    const dispatch=useDispatch()
    const value=useSelector((state)=>state.todo?.completed)
    // console.log(value)
    useEffect(()=>{
        getCompletedTodos(dispatch)
    },[])

    return <>
        <h2>Total Completed Todos:{value.length}</h2>
        {value.map((todo)=>{
            return <div  style={{ "borderTop": "1px solid black", "padding": ".5rem" }}  key={todo.id}>
            <p >{todo.id} . {todo.title}</p>
            <p>{todo.status}</p>
            </div>
        }   
            )}
    </>
}
